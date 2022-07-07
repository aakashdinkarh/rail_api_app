import { configureStore } from "@reduxjs/toolkit";
import statusReducer from "./components/LiveStatus/StatusSlice";
import BetweenStationReducer from "./components/BetweenStation/BetStnsSlice";

const reducer = {
  statusReducer,
  BetweenStationReducer,
};

export default configureStore({
  reducer,
});
