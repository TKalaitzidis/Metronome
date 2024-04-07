
function RhythmList(props){
    

    const handleOptionChange = (event) => {
        props.setSelectedOption(event.target.value);
    };

    return(
        <div>
            <input type="radio" name="rhythm" id="quarter" value="1" checked={props.selectedOption === '1'} onChange={handleOptionChange} />
            <input type="radio" name="rhythm" id="eight" value="2" checked={props.selectedOption === '2'} onChange={handleOptionChange} />
            <input type="radio" name="rhythm" id="sixteen" value="4" checked={props.selectedOption === '4'} onChange={handleOptionChange} />
            <input type="radio" name="rhythm" id="triplet" value="3" checked={props.selectedOption === '3'} onChange={handleOptionChange} />       </div>
    )
};

export default RhythmList;