import { useState } from "react";
import BeerForm from "./BeerForm";
import TogglePercentagesButton from "./TogglePercentagesButton";
import BeerList from "./BeerList";
import DeleteAllBeers from "./DeleteAllBeers";

import Copyright from "./Copyright";

function App() {
    const [beers, setBeers] = useState([]);
    const [showPercentages, setShowPercentages] = useState(true);

    function addBeer(newBeer) {
        setBeers([...beers, newBeer]);
      }
        
    function handleDeleteBeer(index) {
        const filteredBeers = beers.filter((beer, i) => i !== index);
        setBeers(filteredBeers);
    }

    function handleIncreasePercentage(index) {
        let updatedBeers = beers.map((beer, i) => {
        if (i === index) {
            return {
            ...beer,
            alcoholPercentage: Math.min(beer.alcoholPercentage + 1, 100),
            };
        } else {
            return beer;
        }
        });
        setBeers(updatedBeers);
    }

    function handleDecreasePercentage(index) {
        let updatedBeers = beers.map((beer, i) => {
        if (i === index) {
            return {
            ...beer,
            alcoholPercentage: Math.max(beer.alcoholPercentage - 1, 0),
            };
        } else {
            return beer;
        }
        });
        setBeers(updatedBeers);
    }

    function handleDeleteAllBeers() {
        setBeers([]);
    }

    function handleToggleShowPercentages() {
        setShowPercentages((prevState) => !prevState);
    }

    return (
        <div>
            <h1>Bieren</h1>
            <p>Er zijn veel bieren in Belgie.</p>

            <BeerForm addBeer={addBeer} />

            <TogglePercentagesButton
                showPercentages={showPercentages}
                onToggleShowPercentages={handleToggleShowPercentages}
            />

            <BeerList 
                beers={beers}
                onBeerDelete={handleDeleteBeer}
                onPercentageIncrease={handleIncreasePercentage}
                onPercentageDecrease={handleDecreasePercentage}
                showPercentages={showPercentages}
            />
            <hr />
            <DeleteAllBeers handleDeleteAllBeers={handleDeleteAllBeers} />
            <hr />


            <Copyright />
        </div>
    );
}


export default App;