"use client";
import React from "react";
import Navbar from "../CompunentIndex/Navbar";
import Footer from "../CompunentIndex/Footer";
import AddBar from "../CompunentIndex/AddBar";
import ImgPotion from "../CompunentProfile/ImgPotion";
import MyAdds from "../CompunentProfile/MyAdds";
import 'flowbite';
import { useEffect } from "react";
function Profile(){
    useEffect(() => {
        import("flowbite"); // Reinitialize Flowbite after mount
      }, []);

    return(
       <div >
           <Navbar />
           <AddBar />  
            <ImgPotion />
            <MyAdds />
          

            <Footer />
        </div>


          

        
    )
}
export default Profile;