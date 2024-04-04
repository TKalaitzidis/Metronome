import React, {useState} from "react";

function BeatCounter() {
    const [beats, setBeats] = useState(2);

    const increment = () => {
        setBeats(beats+1);
    }

    const decrement = () => {
        setBeats(beats-1);
    }

    return(
        <span>
            <button onClick={decrement}>-</button>
            <span>{beats}</span>
            <button onClick={increment}>+</button>
        </span>
    );
}

export default BeatCounter;