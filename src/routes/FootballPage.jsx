"use client";
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Detail from "../CompunentIndex/Detail";
import Footer from "../CompunentIndex/Footer";
import Football from "../CompunantFootball/FootballData";

function FootballPage(){

   

    return(
       <div >
           <Navbar />
           <Detail />
           <Football />
            
           <Footer />

          
        </div>


          

        
    )
}
export default FootballPage;