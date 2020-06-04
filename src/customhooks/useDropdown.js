import React, { useState } from "react";

const useDropDown = (label, options, defaultState = "") => {
  const id = `usedropdown-label-${label.replace(" ", "").toLowerCase()}`;

  const [state, setState] = useState(defaultState);

  const DropDown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onBlur={(e) => setState(e.target.value)}
        onChange={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option>All</option>
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </label>
  );

  return [state, DropDown, setState];
};

export default useDropDown;
