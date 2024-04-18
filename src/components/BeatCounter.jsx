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
        <span className="font-mont text-orange-400 flex-col ml-20">
            <button onClick={decrement} 
            className="border-hidden rounded-full p-1 w-7 h-6 m-1 flex flex-col items-center justify-center bg-gray-500">-</button>
            <span className="flex items-center justify-center">{props.beats}</span>
            <button onClick={increment} className="border-hidden rounded-full p-1 w-7 h-6 m-1 flex items-center justify-center flex-col bg-gray-500">+</button>
        </span>
    );
}

export default BeatCounter;