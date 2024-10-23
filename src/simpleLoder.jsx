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
    const check = setTimeout(() => {
        
        timer()
    }, 2000);
    let email = localStorage.getItem("email")
    
    const timer = () => { 
        
        for (let item of data) {

            if (email === item.email) {
            alert("Profile Done");
            navigate("/Index");  
            return;  
          }
        }
      alert("Please Wait")
        navigate("/Profilemaking");
      };


      useEffect(() => {
          
          fetchDataa()
                
             
          
            }, []);


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;