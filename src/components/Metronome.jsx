import classes from './Metronome.module.css';
import { useState } from 'react';
import BeatCounter from './BeatCounter';
import RhythmList from './RhythmList';
import Clock from './Clock';

function Metronome (){

    const [selectedOption, setSelectedOption] = useState('1');

    const [isStarted, setIsStarted] = useState(false);

    const [beats, setBeats] = useState(2);

    const [tempo, setTempo] = useState(60);

    const [isStressed, setIsStressed] = useState(false);

    const handleTempoChange = (event) => {
        setTempo(parseInt(event.target.value));
        setIsStarted(false); // Stop the clock when tempo changes
    };

    return(
        <div className={classes.maindiv}>
            <div className={classes.tempo}>{tempo} BPM</div>
            <div className={classes.slider}>
                <input type="range" min="20" max="300" value={tempo} steps="1" onChange={handleTempoChange} />
            </div>
 
            <Clock tempo={tempo} isStarted={isStarted} setIsStarted={setIsStarted}
                beats={beats} isStressed={isStressed} selectedOption={selectedOption}/>
            <div className={classes.beats}>
                <input type="checkbox" id="stress" name="stress" onClick={() => setIsStressed(prevState => !prevState)}/>
                <label htmlFor="stress">Stress first beat</label>
                <BeatCounter beats={beats} setBeats={setBeats}/>
                <RhythmList  selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            </div>
        </div>
    );
}

export default Metronome;