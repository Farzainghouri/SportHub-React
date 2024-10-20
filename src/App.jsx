import * as React from "react";
import Index from "./routes/Index";
import Cricket from "./routes/CricketPage";
import Football from "./routes/FootballPage";
import Basketball from "./routes/BasketPage";
import Hockey from "./routes/HockeyPage";
import Tennis from "./routes/TennisPage";
import AddBar from "./routes/AddPage";
import Profile from "./routes/MyProfile";
import Signup from "./auth/signupForm"
import Profilemaking from "./auth/profilemaking";
import Login from "./auth/loginForm";
import Loading from "./loader";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'; 
import 'flowbite';
export default function App() {


  const router = createBrowserRouter([
    { path: "/", element: (<Loading />) },
    { path: "/Index", element: (<Index />) },
    { path: "/Cricket", element: (<Cricket />) },
    { path: "/Football", element: (<Football />) },
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


