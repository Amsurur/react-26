import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import Zustand from "./pages/zustand";
import Redux from "./pages/redux";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/zustand",
          element: <Zustand />,
        },
        {
          path: "/redux",
          element: (
            <Provider store={store}>
              <Redux />
            </Provider>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
