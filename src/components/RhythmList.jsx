import { useState } from "react";

function RhythmList(){
    const [selectedOption, setSelectedOption] = useState('quarter');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    return(
        <div>
            <input type="radio" name="rhythm" id="quarter" checked={selectedOption === 'quarter'} onChange={handleOptionChange} />
            <input type="radio" name="rhythm" id="eight" checked={selectedOption === 'eight'} onChange={handleOptionChange} />
            <input type="radio" name="rhythm" id="sixteen" checked={selectedOption === 'sixteen'} onChange={handleOptionChange} />
            <input type="radio" name="rhythm" id="triplet" checked={selectedOption === 'triplet'} onChange={handleOptionChange} />
            <input type="radio" name="rhythm" id="shuffle" checked={selectedOption === 'quarter'} onChange={handleOptionChange} />
        </div>
    )
};

export default RhythmList;