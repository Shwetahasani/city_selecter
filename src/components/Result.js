import React from "react";

export const Result = ({ selectedCityName, selectedStateName }) => {
  return (
    <div>
      You Have selected {selectedCityName}, {selectedStateName}
    </div>
  );
};
