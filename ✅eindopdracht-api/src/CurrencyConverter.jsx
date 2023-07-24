
import React, { useState, useEffect } from 'react';
import ConvertedAmount from './ConvertedAmount';
import CurrencyFrom from './CurrencyFrom';
import CurrencyTo from './CurrencyTo';
import Amount from './Amount';
import ConvertButton from './ConvertButton';

export default function CurrencyConverter() {
  const [currencies, setCurrencies] = useState([]);
  const [inputCurrency, setInputCurrency] = useState('');
  const [resultCurrency, setResultCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/6c8a34b83fcf6ff713135dcb/latest/USD')
      .then(response => response.json())
      .then(data => setCurrencies(Object.keys(data.conversion_rates)))
      .catch(error => console.log(error));
  }, []);

  const handleInputChange = event => {
    setInputCurrency(event.target.value);
  }
  const handleResultChange = event => {
    setResultCurrency(event.target.value);
  }
  const handleAmountChange = event => {
    setAmount(event.target.value);
  }
  const handleSubmit = event => {
    event.preventDefault();
    fetch (`https://v6.exchangerate-api.com/v6/6c8a34b83fcf6ff713135dcb/latest/${inputCurrency}`)
      .then(response => response.json())
      .then(data => {
        const rate = data.conversion_rates[resultCurrency];
        setConvertedAmount(amount * rate);
      })
      .catch(error => console.log(error));
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CurrencyFrom 
          handleInputChange={handleInputChange}
          currencies={currencies}
        />
        <CurrencyTo 
          handleResultChange={handleResultChange}
          currencies={currencies}
        />
        <Amount 
          amount={amount}
          handleAmountChange={handleAmountChange}
        />
        <ConvertButton />
      </form>

      <ConvertedAmount 
        convertedAmount={convertedAmount} 
        resultCurrency={resultCurrency}
      />
    </div>
  );
}
