import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../reducers/todoSlice.ts";

export const store = configureStore({
  reducer: {
    todo: TodoSlice,
  },
});
