import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addWeight } from './redux/actions'

export default function WeightInput() {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    };

    const handleSaveClick = () => {
        if (inputValue) {
            dispatch(addWeight(inputValue));
            setInputValue('');
        }
    }

    return (
        <div>
            <p>Add weight in kg: 
                <input
                    id="weightInput"
                    type="text" 
                    value={ inputValue }
                    onChange={ handleInputChange }
                    style={{ marginLeft: '5px' }}
                />
                <button 
                    onClick={ handleSaveClick }
                    style={{ marginLeft: '10px' }}>
                        Add
                </button>
            </p>
        </div>
    )
}
