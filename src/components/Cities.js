// Cities.jsx
import React from "react";
import styles from "./Cities.module.css"; // Import the CSS module

export const Cities = ({ cities, selectedCity, setSelectedCity }) => {
  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        onChange={(e) => {
          setSelectedCity(e.target.value);
        }}
        value={selectedCity}
      >
        {cities.map((state) => (
          <option key={state?.city_name} value={state?.city_name}>
            {state?.city_name}
          </option>
        ))}
      </select>
    </div>
  );
};
