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
    fetchDataa()
    setTimeout(() => {
      timer();
    }, 4000);
    
    const timer = () => {
      let email = localStorage.getItem("email");
      let emailFound = false; // Track if a matching email was found
    
      data.forEach((item) => {
        if (item.email === null) {
          navigate("/Profilemaking");
        } else if (item.email === email) {
          // alert("WELCOME");
          navigate("/Index");
          emailFound = true;
        }
      });
      if (!email) {
        alert("No email found in localStorage");
        return;
      }
    
     
    
    };
    

    
  


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;