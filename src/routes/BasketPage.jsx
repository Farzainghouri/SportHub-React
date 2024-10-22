
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Detail from "../CompunantBasketball/Detail";
import Footer from "../CompunentIndex/Footer";
import Basketball from "../CompunantBasketball/BasketballData";
import AddBar from "../CompunentIndex/AddBar";
function BasketballPage(){

   

    return(
       <div >
           <Navbar />
           <AddBar />  

           <Detail />
           <Basketball />
            
           <Footer />

          
        </div>


          

        
    )
}
export default BasketballPage;