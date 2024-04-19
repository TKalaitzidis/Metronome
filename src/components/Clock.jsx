import React, { useState, useEffect } from 'react';
import { Howl } from 'howler';
import Stressed from '../assets/Stressed.mp3';
import Unstressed from '../assets/Unstressed.mp3';
import Secondary from '../assets/Secondary.mp3';
import { FaPlay, FaPause } from 'react-icons/fa';

function Clock(props) {

    const [callCount, setCallCount] = useState(1);
    const [stressCount, setStressCount] = useState(0);

    const timeInterval = ((60/props.tempo)*1000)/props.selectedOption;             //((minute/tempo)* ms) conversion
    
    const [timeoutId, setTimeoutId] = useState(null);
    
    let expected = Date.now() + timeInterval;

    const stress = new Howl({ src: [Stressed] });
    const unstress = new Howl({ src: [Unstressed] });
    const secondary = new Howl({ src: [Secondary] });

    

    const callback = () => {
    setStressCount(prevStressCount => prevStressCount + 1);

    if (props.isStressed) {
        if (callCount <= props.beats * props.selectedOption) {
            if (callCount === 1) {
                stress.play();
                console.log("first");
            } else if (stressCount % parseInt(props.selectedOption) === 1) {
                secondary.play();
                console.log("second");
            } else {
                unstress.play();
                console.log("click");
            }

            // Functional update for callCount
            setCallCount(prevCallCount => prevCallCount + 1);
        }
    } else {
        if (callCount % parseInt(props.selectedOption) === 1) {
            secondary.play();
            console.log("second");
        } else {
            unstress.play();
            console.log("click");
        }

        setCallCount(prevCallCount => prevCallCount + 1);
    }

    if (callCount > props.beats * props.selectedOption) {
        debugger;
        setCallCount(1);
    }
    if (stressCount > parseInt(props.selectedOption) * props.beats) {
        debugger;
        setStressCount(1);
    }
};

  
      

    useEffect(() => {
        if (props.isStarted) {
            startClock();
            callback(1);
        } else {
            stopClock();
        }

        // Cleanup function
        return () => {
            clearTimeout(timeoutId);
        };
    }, [props.isStarted]); // Run this effect whenever `isStarted` changes


    
    const handleToggle = () => {
        props.setIsStarted(prevState => !prevState);
    }

    const startClock = () => {
        const id = setTimeout(round, timeInterval);
        setTimeoutId(id);
        console.log("Clock started");
    };


    const stopClock = () => {
        clearTimeout(timeoutId);
        setCallCount(1);
        setStressCount(1);
        console.log("Clock stopped");
    };

    const round = () => {
            let drift = Date.now() - expected;
            callback(callCount);
            expected += timeInterval;
            console.log("Drift:", drift);
            setTimeoutId(setTimeout(round, timeInterval-drift));
    };

    return (
        <button onClick={handleToggle} className='pb-2.5'>
            {props.isStarted ? <FaPause style={{ color: '#ED8936' }} /> : <FaPlay style={{ color: '#ED8936' }} />}
        </button>
    );
}

export default Clock;

