import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./Pages/MainPage";
import EarTrainer from "./Pages/EarTrainer";
import NotFound from "./Pages/NotFound";
import Settlements from "./Pages/SettlementsApp";
import Countries from "./Pages/CountriesApp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
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
