import { useState } from "react";

function BeerForm({ addBeer }) {
    const [beerName, setBeerName] = useState("");
    const [beerBrewery, setBeerBrewery] = useState("");
    const [beerAlcoholPercentage, setBeerAlcoholPercentage] = useState(0);

  function handleBeerNameChange(event) {
        setBeerName(event.target.value);
  }

  function handleBeerBreweryChange(event) {
        setBeerBrewery(event.target.value);
  }

  function handleBeerAlcoholPercentageChange(event) {
    const newPercentage = parseInt(event.target.value);
    if (newPercentage >= 0 && newPercentage <= 100) {
        setBeerAlcoholPercentage(newPercentage);
    }
  }

    function handleAddBeer(event) {
    event.preventDefault();

    const newBeer = {
        name: beerName,
        brewery: beerBrewery,
        alcoholPercentage: beerAlcoholPercentage,
    };

    addBeer(newBeer);
    setBeerName("");
    setBeerBrewery("");
    setBeerAlcoholPercentage(0);
  }

  return (
    <form onSubmit={handleAddBeer}>
        <hr />
        <label>
            Naam:
            <input 
                type="text" 
                value={beerName} 
                onChange={handleBeerNameChange} 
            />
        </label>

        <br />
        <br />

        <label>
            Brouwerij:
            <input 
                type="text" 
                value={beerBrewery} 
                onChange={handleBeerBreweryChange} 
            />
        </label>

        <br />
        <br />

        <label>
            Alcohol Percentage:
            <input 
                type="number" 
                value={beerAlcoholPercentage} 
                onChange={handleBeerAlcoholPercentageChange} 
            />
        </label>

        <br />
        <br />

        <button type="submit">Add Beer</button>
        <hr />
    </form>
  );
}

export default BeerForm;
