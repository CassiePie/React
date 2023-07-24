import React from "react";

function BeerList({ beers, onBeerDelete, onPercentageIncrease, onPercentageDecrease, showPercentages }) {
  function handleDeleteBeer(index) {
    onBeerDelete(index);
  }

  return (
    <div>
        <hr />
        {beers.length === 0 ? (
            <p>No beers yet.</p>
        ) : (
            <div>
            {beers.map((beer, index) => (
                <div key={index}>
                <h1>{beer.name}</h1>
                <p>Brewery: {beer.brewery}</p>
                {showPercentages && (
                    <p>
                    Alcoholpercentage:
                    <button onClick={() => onPercentageDecrease(index)}>-</button>
                    <b>{beer.alcoholPercentage}%</b>
                    <button onClick={() => onPercentageIncrease(index)}>+</button>
                    </p>
                )}
                <button onClick={() => handleDeleteBeer(index)}>Remove</button>
                </div>
            ))}
            </div>
        )}
    </div>
  );
}

export default BeerList;
