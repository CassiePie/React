import React from 'react';
import Beer from './Beer';

function BeerList(props) {
    return (
        <div>
            {props.beers.map((beer, index) =>(
                <Beer 
                    key={index}
                    naam={beer.naam}
                    brouwerij={beer.brouwerij}
                    toonAlcoholPercentage={props.toon_alcoholpercentage}
                    alcoholPercentage={beer.alcoholPercentage}
                />
            ))}
        </div>
    )
}

export default BeerList;