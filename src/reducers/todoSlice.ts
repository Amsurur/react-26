import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + 1;
    },
    decrement: (state, action) => {
      state.value = state.value - 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = TodoSlice.actions;

export default TodoSlice.reducer;
