import classes from './Metronome.module.css';
import { useState } from 'react';
import BeatCounter from './BeatCounter';
import RhythmList from './RhythmList';
import Clock from './Clock';

function Metronome (){

    const [tempo, setTempo] = useState(60);

    const handleTempoChange = (event) => {
        setTempo(parseInt(event.target.value));
    };

    return(
        <div className={classes.maindiv}>
            <div className={classes.tempo}>{tempo} BPM</div>
            <div className={classes.slider}>
                <input type="range" min="20" max="300" value={tempo} steps="1" onChange={handleTempoChange} />
            </div>
            <Clock timeInterval={1000} callback={() => console.log("play")}/>
            <div className={classes.beats}>
                <input type="checkbox" id="stress" name="stress" />
                <label htmlFor="stress">Stress first beat</label>
                <BeatCounter />
                <RhythmList />
            </div>
        </div>
    );
}

export default Metronome;