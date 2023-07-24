import React from "react";

function TogglePercentagesButton({ showPercentages, onToggleShowPercentages }) {
  return (
    <button onClick={onToggleShowPercentages}>
        {showPercentages ? "Verberg alcohol percentages" : "Toon alcohol percentages"}
    </button>
  );
}

export default TogglePercentagesButton;
