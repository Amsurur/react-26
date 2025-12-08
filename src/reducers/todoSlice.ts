import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  value2: 0,
  value3: 0,

  data: [
    {
      id: 1,
      name: "Abubakr",
      age: 20,
    },
    {
      id: 2,
      name: "Ahmad",
      age: 22,
    },
  ],
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
    deleteUser: (state, action) => {
      console.log(action);
      state.data = state.data.filter((e) => e.id != action.payload);
    },
    addUser: (state, { payload }) => {
      state.data.push(payload);
    },
    setValue: (state, { payload }) => {
      state[payload.key] = payload.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setValue, deleteUser, addUser } =
  TodoSlice.actions;

export default TodoSlice.reducer;
