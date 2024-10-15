"use client";
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Detail from "../CompunentIndex/Detail";
import Footer from "../CompunentIndex/Footer";
import Tennis from "../CompunentTennis/TennisData";

function FootballPage(){

   

    return(
       <div >
           <Navbar />
           <Detail />
           <Tennis />
            
           <Footer />

          
        </div>


          

        
    )
}
export default FootballPage;