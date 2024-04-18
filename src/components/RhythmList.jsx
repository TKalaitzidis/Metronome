import React from 'react';
import Quarter from '../assets/icons/quarter_svg.svg';
import Eight from '../assets/icons/eight_svg.svg';
import Sixteen from '../assets/icons/sixteen_svg.svg';
import Triplet from '../assets/icons/triplet_svg.svg';

function RhythmList(props){
    const handleOptionChange = (event) => {
        props.setSelectedOption(event.target.value);
    };

    const boxSize = "50px"; // You can adjust the size here

    return(
        <div className='flex flex-row items-stretch justify-center'>
            <label htmlFor="quarter" className="radio-icon flex items-center mr-4 text-gray-300">
                <input
                    type="radio"
                    name="rhythm"
                    id="quarter"
                    value="1"
                    checked={props.selectedOption === '1'}
                    onChange={handleOptionChange}
                    className='hidden'
                />
                <img src={Quarter} alt="Quarter" className={`border-hidden rounded-md ${props.selectedOption === '1' ? 'bg-orange-400' : 'bg-gray-500'} w-${boxSize} h-${boxSize} p-1 hover:bg-orange-400`} />           
            </label> 
            <label htmlFor="eight" className="radio-icon flex items-center mr-4 ">    
                <input 
                    type="radio" 
                    name="rhythm" 
                    id="eight" 
                    value="2" 
                    checked={props.selectedOption === '2'} 
                    onChange={handleOptionChange} 
                    className='hidden ' />
                <img src={Eight} alt="Eight" className={`border-hidden rounded-md ${props.selectedOption === '2' ? 'bg-orange-400' : 'bg-gray-500'} w-${boxSize} h-${boxSize} p-1 hover:bg-orange-400`} />
            </label>
            <label htmlFor="sixteen" className="radio-icon flex items-center mr-4">    
                <input 
                    type="radio" 
                    name="rhythm" 
                    id="sixteen" 
                    value="4" 
                    checked={props.selectedOption === '4'} 
                    onChange={handleOptionChange} 
                    className='hidden' />
                <img src={Sixteen} alt="Sixteen" className={`border-hidden rounded-md ${props.selectedOption === '4' ? 'bg-orange-400' : 'bg-gray-500'} w-${boxSize} h-${boxSize} p-1 hover:bg-orange-400`} />
            </label>
            <label htmlFor="triplet" className="radio-icon flex items-center mr-4">    
                <input 
                    type="radio" 
                    name="rhythm" 
                    id="triplet" 
                    value="3" 
                    checked={props.selectedOption === '3'} 
                    onChange={handleOptionChange} 
                    className='hidden' />
                <img src={Triplet} alt="Triplet" className={`border-hidden rounded-md ${props.selectedOption === '3' ? 'bg-orange-400' : 'bg-gray-500'} w-4/6 h-4/3 p-1 hover:bg-orange-400`} />
            </label>
        </div>
    )
};

export default RhythmList;
