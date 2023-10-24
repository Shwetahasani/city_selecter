import React from "react";


export const Cities = ({cities,selectedCity,setSelectedCity}) => {
  
  return (
    <div>
      <select
      onChange={(e) => {
        setSelectedCity(e.target.value)
      }}
      value={selectedCity}
      >{
        cities.map(state => <option key={state?.city_name} value={state?.city_name}>{state?.city_name}</option>)}</select>
    </div>
  );
};
