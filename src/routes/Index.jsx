
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import AddBar from "../CompunentIndex/AddBar";
import Detail from "../CompunentIndex/Detail";
import Cricket from "../CompunentIndex/Cricket";
import FootBall from "../CompunentIndex/FootBall";
import BasketBall from "../CompunentIndex/Basketball";
import Hockey from "../CompunentIndex/Hockey";
import Tennis from "../CompunentIndex/Tennis";
import Social from "../CompunentIndex/Social";
import Footer from "../CompunentIndex/Footer";
import Swipper from "../CompunentIndex/Swipper";

import 'flowbite';
import { useEffect } from "react";
function Index(){
    useEffect(() => {
        import("flowbite"); // Reinitialize Flowbite after mount
      }, []);

    return(
       <div >
           <Navbar />

            <AddBar />  
    
            <Detail />
            <Swipper /> 

            <Cricket />

            <FootBall />

            <Social />

            <BasketBall />


            <Hockey />

            <Tennis />

            <Footer />
        </div>


          

        
    )
}
export default Index;