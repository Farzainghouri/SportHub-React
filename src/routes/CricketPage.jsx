"use client";
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Detail from "../CompunentIndex/Detail";
import Footer from "../CompunentIndex/Footer";
import Cricket from "../CompunantCricket/CricketData";
import AddBar from "../CompunentIndex/AddBar";


function CricketPage(){

   

    return(
       <div >
           <Navbar />
           <AddBar />  

           <Detail />
           <Cricket />
            
           <Footer />

          
        </div>


          

        
    )
}
export default CricketPage;