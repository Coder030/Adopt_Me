import React, { useState } from "react";
import Breeds from "./global";

const useDropdown = (label, defaultStateAni, options) => {
  const [state, updateState] = useState(defaultStateAni);
  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;
  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        required
        id={id}
        value={state}
        onChange={(e) => {
          updateState(e.target.value);
          if (label === "Animal") {
            if (state === "Dog"){
              
            }
          }
        }}
        onBlur={(e) => updateState(e.target.value)}
        disabled={!options.length}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );
  return [state, Dropdown, updateState];
};

export default useDropdown;   


