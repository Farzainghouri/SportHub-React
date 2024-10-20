import * as React from "react";

import * as ReactDOM from "react-dom/client";
import Index from "./routes/Index";
import Cricket from "./routes/CricketPage";
import Football from "./routes/FootballPage";
import Basketball from "./routes/BasketPage";
import Hockey from "./routes/HockeyPage";
import Tennis from "./routes/TennisPage";
import AddBar from "./routes/AddPage";
import Profile from "./routes/ProfilePage";
import Signup from "./auth/signup"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; // Import Tailwind CSS first
import 'flowbite';
import { HashRouter as Router } from "react-router-dom";
import Login from "./auth/login";
import Loading from "./loader";
import Profilemaking from "./auth/profilemaking";

export default function App() {


  const router = createBrowserRouter([
    { path: "/", element: (<Loading />) },
    { path: "/Index", element: (<Index />) },
    { path: "/Cricket", element: (<Cricket />) },
    { path: "/football", element: (<Football />) },
    { path: "/Basketball", element: (<Basketball />) },
    { path: "/Hockey", element: (<Hockey />) },
    { path: "/Tennis", element: (<Tennis />) },
    { path: "/Add", element: (<AddBar />) },
    { path: "/Profile", element: (<Profile />) },
    { path: "/Signup", element: (<Signup />) },
    { path: "/Login", element: (<Login />) },
    { path: "/Profilemaking", element: (<Profilemaking />) },


  ]);


  return <RouterProvider router={router} />

}


