import React, { useState } from "react";
//helpers
import { fetchTrainNumbers } from "../api_methods";

const TrainNumInputElement = ({ placeholder, state, stateSetter }) => {
  const [searchResults, setSearchResults] = useState([]);

  let timer;
  const handleChange = (e) => {
    stateSetter(e.target.value);
  };
  const handleKeyUp = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (state !== "" && state.length > 1) {
        const data = fetchTrainNumbers(state);
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
        list="results"
      />
      {searchResults && searchResults.length !== 0 ? (
        <datalist id="results">
          {searchResults.map((elem) => (
            <option key={elem.number} value={elem.number}>
              {elem.name}
            </option>
          ))}
        </datalist>
      ) : null}
    </>
  );
};

export default TrainNumInputElement;
