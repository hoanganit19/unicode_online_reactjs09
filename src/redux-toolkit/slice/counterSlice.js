import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    //type: counter/increment
    increment: (state, action) => {
      state.count = state.count + action.payload;
    },
    //type: counter/decrement
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
