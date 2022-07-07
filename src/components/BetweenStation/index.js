import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeFrom, changeTo, changeInfo, reverse } from "./BetStnsSlice";
//components
import StationList from "./StationList";
import StationInputElement from "../StationInputElement.js";
//helpers
import { fetchTrains, isPersistedState } from "../../api_methods";
//styles
import {
  InputContainer,
  ResultContainer,
  Wrapper,
} from "./BetweenStation.styles";

const BetweenStations = () => {
  const from = useSelector((state) => state.BetweenStationReducer.from);
  const to = useSelector((state) => state.BetweenStationReducer.to);
  const info = useSelector((state) => state.BetweenStationReducer.stnInfo);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  //state modifier
  const setFrom = (val) => {
    dispatch(changeFrom(val));
  };
  const setTo = (val) => {
    dispatch(changeTo(val));
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    if (from !== "" && to !== "") {
      const sessionState = isPersistedState(from + to);
      if (sessionState) {
        console.log("from session");
        dispatch(changeInfo(sessionState));
      } else {
        console.log("from api");
        const results = await fetchTrains(from, to);
        dispatch(changeInfo(results));
        sessionStorage.setItem(from + to, JSON.stringify(results));
      }
    }
    setIsLoading(false);
  };
  //calculating result to be displayed
  let result;
  if (isLoading) {
    result = <p>Loading...</p>;
  } else if (info !== "") {
    if (info && info.data && Array.isArray(info.data)) {
      if (info.data.length === 0) result = <p>No train found.</p>;
      else result = <StationList list={info.data} />;
    } else {
      result = <p>{info.message}</p>;
    }
  }

  return (
    <Wrapper>
      <InputContainer>
        <div className="stationContainer">
          <StationInputElement
            placeholder="From"
            state={from}
            stateSetter={setFrom}
          />
          <button className="reverse" onClick={() => dispatch(reverse())}>
            Reverse
          </button>
          <StationInputElement
            placeholder="To"
            state={to}
            stateSetter={setTo}
          />
        </div>
        <div className="searchContainer">
          <button className="submit" onClick={handleSubmit}>
            Search
          </button>
        </div>
      </InputContainer>
      <ResultContainer>{result}</ResultContainer>
    </Wrapper>
  );
};

export default BetweenStations;
