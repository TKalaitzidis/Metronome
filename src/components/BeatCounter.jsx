import React, {useState} from "react";

function BeatCounter(props) {
    

    const increment = () => {
        props.setBeats(props.beats+1);
    }

    const decrement = () => {
        props.setBeats(props.beats-1);
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