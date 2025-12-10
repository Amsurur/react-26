import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { addData, deleteData } from "../reducers/todoSlice";
import { useFormik } from "formik";

const Redux = () => {
  const { data } = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();

  const { handleSubmit, handleChange, values, handleReset, initialErrors } =
    useFormik({
      initialValues: {
        name: "",
        age: "",
      },
      onSubmit: (values) => {
        dispatch(addData({ id: Date.now(), ...values }));
      },
    });
  return (
    <div>
      <h1>Redux</h1>
      <form onSubmit={handleSubmit} action="">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="age"
          value={values.age}
          onChange={handleChange}
        />
        <button type="submit">Save</button>
      </form>
      {data.map((e) => {
        return (
          <div style={{ display: "flex", gap: "40px", alignItems: "center" }}>
            <h1>Name: {e.name}</h1>
            <h3>Age: {e.age}</h3>
            <button onClick={() => dispatch(deleteData(e.id))}>❌</button>
            <button>✒️</button>
          </div>
        );
      })}
    </div>
  );
};

export default Redux;
