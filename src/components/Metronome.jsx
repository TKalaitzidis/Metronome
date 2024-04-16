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
        <div className="flex flex-col items-center justify-center h-screen gap-1 bg-black bg-opacity-80">
            <div className="font-bold font-serif text-orange-400 text-4xl pb-5"><span className='text-3xl'>{tempo}</span> <span className="text-xs">BPM</span></div>
            <div>
                <input type="range" min="20" max="300" value={tempo} steps="1" onChange={handleTempoChange} 
                className="appearance-none w-full h-4 bg-black bg-opacity-40 rounded-full outline-none"/>
            </div>
 
            <Clock tempo={tempo} isStarted={isStarted} setIsStarted={setIsStarted}
                beats={beats} isStressed={isStressed} selectedOption={selectedOption} tolerance={10} />
            <div>
                <input type="checkbox" id="stress" name="stress" onClick={() => setIsStressed(prevState => !prevState)}/>
                <label htmlFor="stress">Stress first beat</label>
                <BeatCounter beats={beats} setBeats={setBeats}/>
                <RhythmList  selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
            </div>
        </div>
    );
}

export default Metronome;