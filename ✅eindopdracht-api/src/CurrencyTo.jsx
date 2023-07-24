import React from 'react';

function CurrencyTo(props) {
    return (
        <div>
          <label>to</label>
          <select onChange={props.handleResultChange}>
            {props.currencies.map(currency => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
    )
}

export default CurrencyTo;