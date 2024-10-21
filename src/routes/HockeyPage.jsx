
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Detail from "../CompunentIndex/Detail";
import Footer from "../CompunentIndex/Footer";
import Hockey from "../CompunantHockey/HockeyData";
import AddBar from "../CompunentIndex/AddBar";
function FootballPage(){

   

    return(
       <div >
           <Navbar />
           <AddBar />  

           <Detail />
           <Hockey />
            
           <Footer />

          
        </div>


          

        
    )
}
export default FootballPage;