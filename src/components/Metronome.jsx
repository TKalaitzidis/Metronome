import { useState } from 'react';
import BeatCounter from './BeatCounter';
import RhythmList from './RhythmList';
import Clock from './Clock';
import classes from "./Metronome.module.css"

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
        <div className="flex flex-col items-center justify-center h-screen gap-1 bg-black bg-opacity-80">
            <div className="font-bold font-mont text-orange-400 text-6xl">
                <span>{tempo}</span> <span className="text-xl">BPM</span>
            </div>
            
            <div className="flex items-center">
                <input 
                    type="range" 
                    min="20" 
                    max="300" 
                    value={tempo} 
                    steps="1" 
                    onChange={handleTempoChange} 
                    className={`appearance-none flex-1 h-4 bg-black bg-opacity-40 rounded-full outline-none ${classes.customslider}`}
                />
                <BeatCounter beats={beats} setBeats={setBeats}/>
            </div>
            <Clock tempo={tempo} isStarted={isStarted} setIsStarted={setIsStarted}
                beats={beats} isStressed={isStressed} selectedOption={selectedOption}/>
            <div className="flex w-full justify-between items-center">
                <div className='flex-1 items-center'>
                    <input 
                        type="checkbox" 
                        id="stress" 
                        name="stress" 
                        onClick={() => setIsStressed(prevState => !prevState)} 
                        className={classes.customcheckbox}
                    />
                    <label 
                        htmlFor="stress" 
                        className='text-orange-400 font-mont text-xs font-medium p-2'
                        style={{ lineHeight: '1.5rem' }}
                    >
                        STRESS FIRST BEAT
                    </label>
                </div>
            </div>
            
            <RhythmList selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>    
        </div>
    );
}

export default Metronome;
