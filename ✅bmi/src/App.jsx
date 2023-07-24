import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLength, addWeight, removeWeight } from './redux/actions';
import LengthDisplay from './LengthDisplay';
import LengthInput from './LengthInput';
import Weight from './Weight';
import WeightInput from './WeightInput';
import WeightList from './WeightList';

function App() {
  const dispatch = useDispatch();
  const { length, weights } = useSelector(state => state);

  const handleLengthSave = (value) => {
    dispatch(setLength(value));
  };

  const handleWeightAdd = (value) => {
    dispatch(addWeight(value));
  };

  const handleWeightRemove = (value) => {
    dispatch(removeWeight(value));
  };

  const [newWeight, setNewWeight] = useState('');

  const handleNewWeightChange = (event) => {
    setNewWeight(event.target.value);
  };

  const handleNewWeightAdd = () => {
    handleWeightAdd(newWeight);
    setNewWeight('');
  };

  return (
    <div>
      <LengthInput onSave={handleLengthSave} />
      <WeightInput
        value={newWeight}
        onChange={handleNewWeightChange}
        onAdd={handleNewWeightAdd}
      />
      <LengthDisplay length={length} />
      <WeightList>
        {weights.map((weight, index) => (
          <Weight
            key={index}
            weight={weight}
            length={length}
            onRemove={() => handleWeightRemove(weight)}
          />
        ))}
      </WeightList>
    </div>
  );
}

export default App;
