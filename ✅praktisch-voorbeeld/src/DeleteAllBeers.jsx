import React from "react";

function DeleteAllBeers({ handleDeleteAllBeers }) {
  return (
    <button onClick={handleDeleteAllBeers}>Delete All Beers</button>
  );
}

export default DeleteAllBeers;