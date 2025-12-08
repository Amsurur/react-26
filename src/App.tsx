import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./reducers/todoSlice";
const App = () => {
  const { value } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  console.log(value);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{value}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default App;
