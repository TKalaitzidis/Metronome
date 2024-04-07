import React, { useState, useEffect } from 'react';
import Stressed from '../assets/Stressed.wav';
import Unstressed from '../assets/Unstressed.wav';
import Secondary from '../assets/Secondary.wav';

function Clock(props) {

    let callCount = 1;

    const timeInterval = ((60/props.tempo)*1000)/props.selectedOption;             //((minute/tempo )* ms) conversion
    
    const [timeoutId, setTimeoutId] = useState(null);
    
    let expected = Date.now() + timeInterval;

    const stress = new Audio(Stressed);
    const unstress = new Audio(Unstressed);
    const secondary = new Audio(Secondary);

    let stressCount=0;

    const callback = (callCount) => {
        stressCount++;
        
        console.log(callCount);
        console.log(stressCount);
        if(props.isStressed){
            if(callCount<=props.beats*props.selectedOption){
                
                if(callCount===1){
                    stress.play();
                    console.log("first");
                }
                else if(stressCount% parseInt(props.selectedOption) === 1){
                    unstress.play();
                    console.log("second");

                }
                else{
                    secondary.play();
                    console.log("click")
                }
                callCount++;
            }
        }
        else{
            unstress.play();
        }
        if (callCount > props.beats*props.selectedOption) {
            callCount = 1;
        }
        if (stressCount > parseInt(props.selectedOption)*props.beats){
            stressCount = 1;
        }
        return callCount;
    };

    useEffect(() => {
        if (props.isStarted) {
            startClock();
            callCount = callback(callCount);
            
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
        console.log("Clock stopped");
    };

    const round = () => {
            let drift = Date.now() - expected;
            callCount = callback(callCount);
            expected += timeInterval;
            console.log("Drift:", drift);
            setTimeoutId(setTimeout(round, timeInterval-drift));
    };

    return (
        <button onClick={handleToggle}>
            {props.isStarted ? 'Stop' : 'Start'}
        </button>
    );
}

export default Clock;