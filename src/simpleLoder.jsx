import React, { useState,useEffect } from 'react';
import { collection, addDoc, getDocs} from "firebase/firestore"
import { useNavigate } from "react-router-dom";
import {db} from "./Firebase/Firebase";

const Loader = () => {
    const [data, setData] = useState([]);
    let email = localStorage.getItem("email");

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

    
    useEffect( () => {
      fetchDataa()
      
    }, [])
    
    
    setTimeout(() => {
    checking()
  }, .500);
  setTimeout(() => {
    timer();
  }, 5000);
    
    
    const checking = ()=>{
      
      
      data.forEach((item) => {
        if (item.email === email) {
          setuseremail(item.email)
          
        }})

        
      }
    const [useremail, setuseremail] = useState("");
      
      
    const timer = () => {

      setTimeout(() => {
        if (useremail === email) {
          navigate("/Index");
        }else(
            navigate("/Profilemaking")
          
        )
      }, 2000);
      
      // let emailFound = false; // Track if a matching email was found
        
     
      // if (!email) {
      //   alert("No email found in localStorage");
      //   return;
      // }
    
     
    
    };
    

    
  


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loader;