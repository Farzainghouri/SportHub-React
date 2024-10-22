
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Detail from "../CompunentTennis/Detail";
import Footer from "../CompunentIndex/Footer";
import Tennis from "../CompunentTennis/TennisData";
import AddBar from "../CompunentIndex/AddBar"
function FootballPage(){

   

    return(
       <div >
           <Navbar />
           <AddBar />  

           <Detail />
           <Tennis />
            
           <Footer />

          
        </div>


          

        
    )
}
export default FootballPage;