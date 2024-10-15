"use client";
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Detail from "../CompunentIndex/Detail";
import Footer from "../CompunentIndex/Footer";
import Hockey from "../CompunantHockey/HockeyData";

function FootballPage(){

   

    return(
       <div >
           <Navbar />
           <Detail />
           <Hockey />
            
           <Footer />

          
        </div>


          

        
    )
}
export default FootballPage;