import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";
import Eightapp from "../pages/EightApp/Eightapp";
import Allapps from "../pages/All Apps/Allapps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, loader: () => fetch("eightapp.json"), Component: Home },
      {
        path: "eightapp",
        loader: () => fetch("eightapp.json"),
        Component: Eightapp,
      },
      {
        path: "allapps",
        loader: () => fetch("app.json"),
        Component: Allapps,
      },
    ],
  },
]);
