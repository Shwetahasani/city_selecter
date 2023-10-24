// States.jsx
import React from "react";
import styles from "./States.module.css"; // Import the CSS module

export const States = ({ states, selectedState, setSelectedState }) => {
  return (
    <div className={styles.selectContainer}>
      <select
        className={styles.select}
        onChange={(e) => {
          setSelectedState(e.target.value);
        }}
        value={selectedState}
      >
        {states.map((state) => (
          <option key={state?.state_name} value={state?.state_name}>
            {state?.state_name}
          </option>
        ))}
      </select>
    </div>
  );
};
