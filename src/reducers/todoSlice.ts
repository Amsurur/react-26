import { createSlice } from "@reduxjs/toolkit";

interface IData {
  id: number;
  name: string;
  age: number;
}
export interface CounterState {
  data: IData[];
}

const initialState: CounterState = {
  data: [{ id: 1, name: "Ahmad", age: 15 }],
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    deleteData: (state, { payload }) => {
      state.data = state.data.filter((e) => e.id != payload);
    },
    addData: (state, { payload }) => {
      state.data.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { deleteData, addData } = counterSlice.actions;

export default counterSlice.reducer;
