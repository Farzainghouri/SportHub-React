
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Detail from "../CompunantFootball/Detail";
import Footer from "../CompunentIndex/Footer";
import Football from "../CompunantFootball/FootballData";
import AddBar from "../CompunentIndex/AddBar";
function FootballPage(){

   

    return(
       <div >
           <Navbar />
           <AddBar />  

           <Detail />
           <Football />
            
           <Footer />

          
        </div>


          

        
    )
}
export default FootballPage;