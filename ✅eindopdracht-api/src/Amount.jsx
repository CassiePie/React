import React from 'react';

function Amount(props) {
    return (
        <div>
          <label>Amount:</label>
          <input type="number" amount={props.amount} onChange={props.handleAmountChange} />
        </div>
    )
}

export default Amount;