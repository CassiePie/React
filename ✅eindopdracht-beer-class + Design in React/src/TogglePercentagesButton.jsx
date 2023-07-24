import React from "react";

function TogglePercentagesButton(props) {
  return (
    <div className="row">
      <div className="col s12">
        <button
          className="btn waves-effect waves-light blue-grey darken-1"
          onClick={props.toggleAlcoholPercentage}
        >
          {props.toon_alcoholpercentage
            ? "Verberg alcohol percentages"
            : "Toon alcohol percentages"}
        </button>
      </div>
    </div>
  );
}

export default TogglePercentagesButton;
