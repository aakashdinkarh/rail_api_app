import { createSlice } from "@reduxjs/toolkit";

export const StatusSlice = createSlice({
  name: "status",
  initialState: {
    number: "",
    daysAgo: 0,
    info: "",
  },
  reducers: {
    changeNumber: (state, action) => {
      state.number = action.payload;
    },
    changeDaysAgo: (state, action) => {
      state.daysAgo = action.payload;
    },
    changeInfo: (state, action) => {
      state.info = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeNumber, changeDaysAgo, changeInfo } = StatusSlice.actions;

export default StatusSlice.reducer;
