import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, deleteUser, setValue } from "./reducers/todoSlice";
const App = () => {
  const { value, data, value2   } = useSelector((store) => store.todo);
  const dispatch = useDispatch();
  const handlesubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: Date.now(),
      name: e.target["name"].value,
      age: e.target["age"].value,
    };
    if (
      e.target["name"].value.trim().length > 0 &&
      e.target["age"].value.trim().length > 0
    ) {
      dispatch(addUser(newUser));
    }
    e.target.reset();
  };
  return (
    <>
      <form onSubmit={handlesubmit} action="">
        <input type="text" name="name" />
        <input type="text" name="age" />
        <button type="submit">submit</button>
      </form>
      <input
        type="text"
        value={value}
        onChange={(e) =>
          dispatch(setValue({ key: "value", value: e.target.value }))
        }
      />
      <input
        value={value2}
        type="text"
        onChange={(e) =>
          dispatch(setValue({ key: "value2", value: e.target.value }))
        }
      />
      <input type="text" />
      <input type="text" /> <input type="text" />
      <div>
        {data.map((e, i) => {
          return (
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <p>{i + 1}</p>
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
