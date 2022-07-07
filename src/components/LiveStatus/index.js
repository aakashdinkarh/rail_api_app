import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { changeNumber, changeDaysAgo, changeInfo } from "./StatusSlice";
//styles
import { Wrapper } from "./LiveStatus.styles";
//helpers
import { fetchLiveStatus } from "../../api_methods";
//components
import LiveStatusInfo from "./LiveStatusInfo";
import TrainNumInputElement from "../TrainNumInputElement";

const error = {
  backgroundColor: "var(--blueForth)",
  fontSize: "x-large",
  color: "white",
  padding: "20px",
};

const LiveStatus = () => {
  const number = useSelector((state) => state.statusReducer.number);
  const daysAgo = useSelector((state) => state.statusReducer.daysAgo);
  const info = useSelector((state) => state.statusReducer.info);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  //state modifier
  const setNumber = (num) => {
    dispatch(changeNumber(num));
  };
  const handleSubmit = async () => {
    setIsLoading(true);
    if (number !== "") {
      console.log("from api");
      const results = await fetchLiveStatus(number, daysAgo);
      dispatch(changeInfo(results));
    } else {
      alert("Not a valid train number");
    }
    setIsLoading(false);
  };

  //result calculation
  let result;
  if (isLoading) {
    result = <p>Loading...</p>;
  } else if (info !== "") {
    if (info.status && info.data) {
      if (info.data.success) {
        //success true
        result = <LiveStatusInfo data={info.data} />;
      } else {
        //success false
        let err = "";
        if (info.data.title) err += info.data.title; //if title exists
        if (info.data.new_message)
          err += info.data.new_message; //if new_message exist
        else err += info.data.message; //else message exist

        result = <p style={error}>{err}</p>; //final error displayed as result
      }
    } else {
      result = <p style={error}>{info.message}</p>; //custom error
    }
  } else {
    result = null;
  }
  return (
    <Wrapper>
      <TrainNumInputElement
        placeholder="Train Number"
        state={number}
        stateSetter={setNumber}
      />
      <select
        title="Train Start Date"
        onChange={(e) => dispatch(changeDaysAgo(e.target.value))}
      >
        <option value="0">Today</option>
        <option value="1">Yesterday</option>
        <option value="2">2 days ago</option>
        <option value="3">3 days ago</option>
      </select>
      <button onClick={handleSubmit}>Get Status</button>
      <br />
      {result}
    </Wrapper>
  );
};

export default LiveStatus;
