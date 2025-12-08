import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, deleteUser, increment } from "./reducers/todoSlice";
const App = () => {
  const { value, data } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  console.log(value);

  return (
    <>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{value}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <div>
        {data.map((e) => {
          return (
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <p>{e.id}</p>
              <h1>{e.name}</h1>
              <h3>{e.age}</h3>
              <button onClick={() => dispatch(deleteUser(e.id))}>🗑️</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
