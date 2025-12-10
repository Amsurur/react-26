import React from "react";
import { UseData } from "../zustand/zustand";
import { useFormik } from "formik";

const Zustand = () => {
  const { data, deleteData, addData, checkData } = UseData((state) => state);

  const { handleSubmit, handleChange, values, resetForm } = useFormik({
    initialValues: {
      name: "",
      age: "",
    },
    onSubmit: (values) => {
      addData({ id: Date.now, ...values });
      resetForm();
    },
  });
  return (
    <div>
      <h1>Zustand</h1>
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
            <h2>Name: {e.name}</h2>
            <h3>Age: {e.age}</h3>
            <input
              onClick={() => checkData(e.id)}
              type="checkbox"
              checked={e.status}
            />
            <p>{e.status ? "Active" : "Inactive"}</p>
            <button onClick={() => deleteData(e.id)}>❌</button>
            <button>✒️</button>
          </div>
        );
      })}
    </div>
  );
};

export default Zustand;
