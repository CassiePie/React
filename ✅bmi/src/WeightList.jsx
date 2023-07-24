import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeWeight } from './redux/actions';
import Weight from './Weight';

export default function WeightList() {
    const weights = useSelector(state => state.weights);
    const height = useSelector(state => state.length);
    const dispatch = useDispatch();

    const handleRemoveWeight = (weight) => {
        dispatch(removeWeight(weight));
    };

    const stylez = () => ({
        display: 'flex', 
        alignItems: 'center',
    })

    return (
        <div>
            { weights.length > 0 ? (
                <ul>
                    { weights && weights.map((weight, index) => (
                        <li key={ index }>
                            <p style={ stylez() }>
                                <Weight
                                    weight={ weight }
                                    height={ height }
                                />
                                <button 
                                    onClick={() => handleRemoveWeight(weight)}
                                    style={{ marginLeft: '10px' }}>
                                        Remove
                                </button>
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No weight entered yet</p>
            )}
        </div>
    );
}
