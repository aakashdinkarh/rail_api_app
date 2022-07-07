import React, { useState } from "react";
//helpers
import { fetchStations } from "../api_methods";

const InputElement = ({ placeholder, state, stateSetter }) => {
  const [searchResults, setSearchResults] = useState([]);

  let timer;
  const handleChange = (e) => {
    stateSetter(e.target.value);
  };
  const handleKeyUp = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (state !== "" && state.length > 1) {
        const data = fetchStations(state);
        setSearchResults(data);
      }
    }, 500);
  };

  return (
    <>
      <input
        type="search"
        value={state}
        placeholder={placeholder}
        onKeyDown={() => clearTimeout(timer)}
        onKeyUp={handleKeyUp}
        onChange={handleChange}
        list={placeholder}
      />
      {searchResults && searchResults.length !== 0 ? (
        <datalist id={placeholder}>
          {searchResults.map((elem) => (
            <option key={elem.code} value={elem.code}>
              {elem.name}
            </option>
          ))}
        </datalist>
      ) : null}
    </>
  );
};

export default InputElement;
