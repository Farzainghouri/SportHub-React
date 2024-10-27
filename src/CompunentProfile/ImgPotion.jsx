import React, { useEffect, useState } from "react";
import {db} from "../Firebase/Firebase";
import { collection, getDocs } from "firebase/firestore";
import { FaUserCircle } from 'react-icons/fa';

import "../App.css"
export default function ImgPotion(){
    const [data, setData] = useState([]);
    const [show, setShow] = useState("hidden");
    const [hid, sethid] = useState("block");
    let email = localStorage.getItem("email")
    const Dp = <FaUserCircle className="text-7xl text-gray-400" /> ;

    const fetchedData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "ProfileData"));
        const dataArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataArray);
        // setShow("block")
        // sethid("hidden")
        
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    useEffect(() => {
      fetchedData();
    }, []);

  

    return(
        <div>
             
           

            <div className="bg-gray-700">

        {data.map((item,index) => { 
            
            if (item.email == email) {
                
               return ( 
                <div  key={index} className="">           
            <div className="h-[34vw] sm:h-[30vw] profile-bg md:[29vw]  w-full flex justify-center items-end">
                   <img src={item.Url} className="w-[23vw] h-[23vw] sm:h-[18vw] sm:w-[18vw] md:w-[15vw] md:h-[15vw]  mb-[-22px] rounded-full border-white border-8" />
                </div>
            <h1 className="text-center mt-12 font-bold text-4xl font-serif uppercase">
                {item.name}
            </h1>
            <h1 className="text-center text-gray-400 pb-6  font-semibold text-lg">
                {email}
            </h1>
            </div>

    
            
)


} })}
</div>

         


</div>
       

    )
}


{/* <div className={`bg-gray-700 ${hid} `}>
                <div className="h-[29vw] profile-bg w-full flex justify-center items-end">
                <div className="">
                    
                    <FaUserCircle className="text-9xl text-gray-400" />
                </div>
                
            </div>
            <h1 className="text-center mt-12 font-bold text-4xl">
                Your Name
            </h1>
            <h1 className="text-center text-gray-400 pb-6  font-semibold text-lg">
                Your Email
            </h1>
    
            
            </div> */}