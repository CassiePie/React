import React from 'react';

function CurrencyFrom(props) {
    return (
        <div>
          <label>Convert rates from </label>
            <select onChange={props.handleInputChange}>
              {props.currencies.map(currency => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
        </div>
    )
}

export default CurrencyFrom;