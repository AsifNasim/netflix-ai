import Browse from "./components/Browse";
import Login from "./components/Login";

import { RouterProvider, createBrowserRouter } from "react-router-dom";



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
    <RouterProvider router={appRouter}/>
  );
}

export default App;
