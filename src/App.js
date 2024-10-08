import { Provider } from "react-redux";
import Browse from "./components/Browse";
import Login from "./components/Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import appStore from "./utils/appStore";



function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    }
  ])
  return (
    <Provider store={appStore}>
      <RouterProvider router={appRouter}/>
    </Provider>
  );
}

export default App;
