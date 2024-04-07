import React from "react";

function BeatCounter(props) {
    

    const increment = () => {
        if (props.beats<12){
            props.setBeats(props.beats+1);
        }
        else {
            props.setBeats(12);
        }
    }

    const decrement = () => {
        if(props.beats>1){
            props.setBeats(props.beats-1);
        }
        else if (props.beats <= 1){
            props.setBeats(1);
        }
    }

    return(
        <span>
            <button onClick={decrement}>-</button>
            <span>{props.beats}</span>
            <button onClick={increment}>+</button>
        </span>
    );
}

export default BeatCounter;