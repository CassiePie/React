import React from 'react';

function Beer(props) {
  return (
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">{props.naam}</span>
        <p>Brouwerij: {props.brouwerij}</p>
        {props.toonAlcoholPercentage && (
          <p>Alcoholpercentage: {props.alcoholPercentage}%</p>
        )}
      </div>
    </div>
  );
}

export default Beer;
