import React from "react";


export const States = ({states,selectedState,setSelectedState}) => {
  
  return (
    <div>
      <select
      onChange={(e) => {
        setSelectedState(e.target.value)
      }}
      value={selectedState}
      >
        {
        states.map(state => <option key={state?.state_name} value={state?.state_name}>{state?.state_name}</option>)}</select>
    </div>
  );
};
