import React, { useState } from 'react';
import Header from './Header';
import Copyright from './Copyright';
import TogglePercentagesButton from './TogglePercentagesButton';
import BeerList from './BeerList';

function App() {
    
    const [beers, setBeers] = useState([
        { naam: 'Grimbergen Double-Ambree', brouwerij: 'Alken-Maes', alcoholPercentage: '8.5' },
        { naam: 'Kasteel Donker', brouwerij: 'Honsebrouck', alcoholPercentage: '11' },
    ]);

    const [toon_alcoholpercentage, setToon_alcoholpercentage] = useState(false);
    
    function handleToggleAlcoholPercentage() {
        setToon_alcoholpercentage((prevState) => !prevState);
    }

    return (
      <div>
        <Header />
        <TogglePercentagesButton
            toon_alcoholpercentage={toon_alcoholpercentage}
            toggleAlcoholPercentage={handleToggleAlcoholPercentage}

        />
        <hr />
        <BeerList
            beers={beers}
            toon_alcoholpercentage={toon_alcoholpercentage} 
        />
        <hr />
        <Copyright />
      </div>
    );
  };
  export default App;