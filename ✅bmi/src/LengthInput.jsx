import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setLength } from './redux/actions'

export default function LengthInput() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSaveClick = () => {
        dispatch(setLength(inputValue));
        setInputValue('');
    };

    return (
        <div>
            <span>Add your height in cm:
                <input 
                    id="lengthInput"
                    type="text"
                    value={ inputValue }
                    onChange={ handleInputChange }
                    style={{ marginLeft: '5px' }}
                />
                <button 
                    onClick={ handleSaveClick }
                    style={{ marginLeft: '10px' }}>
                        Save
                </button> 
            </span>
        </div>
    )
}