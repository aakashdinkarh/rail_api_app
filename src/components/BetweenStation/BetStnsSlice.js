import { createSlice } from "@reduxjs/toolkit";

export const BetweenStationSlice = createSlice({
  name: "betweenStations",
  initialState: {
    from: "",
    to: "",
    stnInfo: "",
  },
  reducers: {
    changeFrom: (state, action) => {
      state.from = action.payload;
    },
    changeTo: (state, action) => {
      state.to = action.payload;
    },
    changeInfo: (state, action) => {
      state.stnInfo = action.payload;
    },
    reverse: (state) => {
      const _from = state.from;
      state.from = state.to;
      state.to = _from;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeFrom, changeTo, changeInfo, reverse } =
  BetweenStationSlice.actions;

export default BetweenStationSlice.reducer;
