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
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; // Import Tailwind CSS first
import 'flowbite';
import { HashRouter as Router } from "react-router-dom";

export default function App() {
  

  const router = createBrowserRouter([
    { path: "/", element: (<Index />)},
    { path: "/Cricket", element: (<Cricket />)},
    { path: "/football", element: (<Football />)},
    { path: "/Basketball", element: (<Basketball />)},
    { path: "/Hockey", element: (<Hockey />)},
    { path: "/Tennis", element: (<Tennis />)},
    { path: "/Add", element: (<AddBar />)},
    { path: "/Profile", element: (<Profile />)},
  
  
  ]);
  
  
   return <RouterProvider router={router} />
  
  }
  

