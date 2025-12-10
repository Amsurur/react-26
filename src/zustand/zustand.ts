import { create } from "zustand";

export const UseData = create((set, get) => ({
  data: [{ id: 1, name: "Ahmad", age: 15, status: true }],
  deleteData: (id: number) =>
    set((state) => ({ data: state.data.filter((e) => e.id != id) })),
  addData: (newData) => {
    get().data.push(newData);
  },
  checkData: (id: number) =>
    set((state) => ({
      data: state.data.map((e) =>
        e.id === id ? { ...e, status: !e.status } : e
      ),
    })),
}));
