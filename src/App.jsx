import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Redux/store";

//  components
import Home from "./pages/Home";
import SingleVideo from "./pages/SingleVideo";
import Add from "./pages/Add";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "video/:id",
      element: <SingleVideo />,
    },
    {
      path: "/add",
      element: <Add />,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
