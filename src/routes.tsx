import {createBrowserRouter} from "react-router";
import Home from "./pages/home";

let routes = createBrowserRouter(
  [
    {
      path: "/",
      Component: Home,
      loader: true
    },
  ]
);

export default routes;
