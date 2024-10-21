import React, { useEffect, useState } from "react";
import {db} from "./Firebase";
import { collection, getDocs } from "firebase/firestore";
function ProfileData(){
    const [data, setData] = useState([]);
    const fetchedData = async () => {
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
  
    useEffect(() => {
      fetchedData();
    }, []);
}

export default data;