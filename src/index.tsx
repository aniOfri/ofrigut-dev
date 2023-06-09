import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./Pages/MainPage";
import Projects from "./Pages/MainPage/project";
import EarTrainer from "./Pages/EarTrainer";
import NotFound from "./Pages/NotFound";
import Settlements from "./Pages/SettlementsApp";
import Countries from "./Pages/CountriesApp";
import Dynrember from "./Pages/Dynrember";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage page="0"/>,
  },
  {
    path: "/projects",
    element: <MainPage page="1" />,
  },
  {
    path: "/eartraining",
    element: <EarTrainer />,
  },
  {
    path: "/settlements",
    element: <Settlements />,
  },
  {
    path: "/countries",
    element: <Countries />,
  },
  {
    path: "/dynrember",
    element: <Dynrember />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
