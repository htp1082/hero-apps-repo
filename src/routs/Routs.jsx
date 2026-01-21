import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "../root/Root";
import Home from "../pages/Home/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
    //   { path: "settings", Component: Settings },
    ],
  },
]);