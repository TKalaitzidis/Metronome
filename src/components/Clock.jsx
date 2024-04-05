import React, { useState, useEffect } from 'react';

function Clock(props) {
    const timeInterval = props.timeInterval;
    
    const [isStarted, setIsStarted] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    
    let expected = Date.now() + timeInterval;

    useEffect(() => {
        if (isStarted) {
            startClock();
        } else {
            stopClock();
        }

        // Cleanup function
        return () => {
            clearTimeout(timeoutId);
        };
    }, [isStarted]); // Run this effect whenever `isStarted` changes


    const handleToggle = () => {
        setIsStarted(prevState => !prevState);
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
        props.callback();
        expected += timeInterval;
        console.log("Drift:", drift);
        setTimeoutId(setTimeout(round, timeInterval-drift));
    };

    return (
        <button onClick={handleToggle}>
            {isStarted ? 'Stop' : 'Start'}
        </button>
    );
}

export default Clock;