"use client";

import React, { useEffect, useState } from "react";
import '../routes/Index'; 
import pic from '../assets/slider/slider1.avif';
import pic2 from '../assets/slider/slider2.jpg';
import pic3 from '../assets/bat.jpg';
import pic4 from '../assets/ball.jpg';
import '../App.css'
import {db} from "../Firebase/Firebase";
import { Card } from "flowbite-react";
import { collection, getDocs } from "firebase/firestore";




export default function FootballData(){
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "product"));
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
    fetchData();
  }, []);

  console.log(data);
  

    return(
      <div>

        <div>
        <div className="">
          

           <div className="flex justify-center items-center h-40  bg-gray-200 font-serif">
        <h1 className=" text-4xl  ">
            CRICKET
        </h1>
    </div>

        <div className="w-[100%] gap-[1.5%] flex flex-wrap mx-1">
        <div className=" w-[23%] my-4">
        <Card
      className="max-w-sm new"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={pic3}
    >

      <div>
        <h1 className="text-4xl font-bold">
          vgu
        </h1>
      </div>
      <a href="#">
        <h5 className="font-semibol  tracking-tight text-gray-500 dark:text-white">
          uuuhuhuhuhuhuh
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">55</span>
        <a
          href="#"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
         BUY
        </a>
      </div>
    </Card>
        </div>
        <div className=" w-[23%]  my-4">
        <Card
      className="max-w-sm new"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={pic}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
     
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <a
          href="#"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
         BUY
        </a>
      </div>
    </Card>
        </div>
        <div className=" w-[23%]  my-4">
        <Card
      className="max-w-sm new"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={pic}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
     
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <a
          href="#"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
         BUY
        </a>
      </div>
    </Card>
        </div>
        <div className=" w-[23%]  my-4">
        <Card
      className="max-w-sm new"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={pic4}
    >
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
        <a
          href="#"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
         BUY
        </a>
      </div>
    </Card>
        </div>
       
       
       
    
</div>

<div>
  <div>
<div className="w-[100%] gap-[1.5%] flex flex-wrap mx-1">


        {data.map(item => { 
             
                if (item.cata == "football") {
                  
                  console.log(item.name);
                  return ( 

                    
                                  <Card key={item.id}
      className="max-w-sm neww-[23%] my-4"
      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={item.Url}
    >

      <div>
        <h1 className="text-4xl font-bold">
          {item.name}
        </h1>
      </div>
      <a href="#">
        <h5 className="font-semibol  tracking-tight text-gray-500 dark:text-white">
          {item.despt}
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{item.price}</span>
        <a
          href="#"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
         BUY
         </a>
         </div>
         </Card>
    
  )
  }
})}
   
</div>
</div>
</div>
</div>
        </div>
      </div>
    )

}