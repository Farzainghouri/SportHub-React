import React, { useState,useEffect } from 'react';
import { collection, addDoc, getDocs} from "firebase/firestore"
import { useNavigate } from "react-router-dom";
import {db} from "./Firebase/Firebase";

const Loader = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    const fetchDataa = async () => {
      try {
            const querySnapshot = await getDocs(collection(db, "ProfileData"));
            const dataArray = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setData(dataArray);
           
       
       
      } catch (error) {
        console.error("Error fetching data: ", error);
      }

      
    };
   setTimeout(() => {
          timer()
        }, .500);
  
        const timer =()=>{ 
          let email = localStorage.getItem("email")
          data.forEach((item) => {
              
              if (email === item.email) {
                  alert("You Profile is done")
                  navigate("/Index")
                  
              }else(
                navigate("/Profilemaking")
              )
              
            }
           
          )
          
          ;}


      fetchDataa()
  


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;