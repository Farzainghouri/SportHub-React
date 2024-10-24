
import React, { useEffect, useState } from "react";
import '../routes/Index'; 
import pic from '../assets/Cricket/bat.jpg';
import pic2 from '../assets/Cricket/ball.jpg';
import pic3 from '../assets/Cricket/pad.jpg';
import pic4 from '../assets/Cricket/shose.jpg';
import {db} from "../Firebase/Firebase";
import { Card } from "flowbite-react";
import { collection, getDocs } from "firebase/firestore";
import "../App.css"




export default function CricketData(){
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

  

    return(
      <div>

<div className="">
    
    <div className="flex justify-center items-center h-40 bg-gray-200 font-serif">
  <h1 className="text-4xl">CRICKET</h1>
</div>

<div className="w-full gap-4 flex flex-wrap mx-1">
  <div className="w-full md:w-[48%] lg:w-[23%] my-4">
    <Card className="max-w-sm new" imgAlt="Cricket Bat" imgSrc={pic}>
      <div>
        <h1 className="text-4xl font-bold">Bat</h1>
      </div>
      <a href="#">
        <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">
          New Bat, Made In Pakistan
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$35</span>
        <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          BUY
        </a>
      </div>
    </Card>
  </div>

  <div className="w-full md:w-[48%] lg:w-[23%] my-4">
    <Card className="max-w-sm new" imgAlt="Cricket Ball" imgSrc={pic2}>
      <div>
        <h1 className="text-4xl font-bold">Ball</h1>
      </div>
      <a href="#">
        <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">
          New Ball, Made In Pakistan
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$13</span>
        <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          BUY
        </a>
      </div>
    </Card>
  </div>

  <div className="w-full md:w-[48%] lg:w-[23%] my-4">
    <Card className="max-w-sm new" imgAlt="Cricket Pad" imgSrc={pic3}>
      <div>
        <h1 className="text-4xl font-bold">Pad</h1>
      </div>
      <a href="#">
        <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">
          New Pad, Made In Pakistan
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$139</span>
        <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          BUY
        </a>
      </div>
    </Card>
  </div>

  <div className="w-full md:w-[48%] lg:w-[23%] my-4">
    <Card className="max-w-sm new" imgAlt="Cricket Shoes" imgSrc={pic4}>
      <div>
        <h1 className="text-4xl font-bold">Shoes</h1>
      </div>
      <a href="#">
        <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">
          New Shoes, Made In Pakistan
        </h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$179</span>
        <a href="#" className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
          BUY
        </a>
      </div>
    </Card>
  </div>
</div>


</div>
       

<div>
  <div>
  <div className="w-full gap-4 flex flex-wrap mx-1">


        {data.map(item => { 
             
                if (item.cata == "cricket") {
                  
                  
                  return ( 

                    <div className="w-full md:w-[48%] lg:w-[23%] my-4">

                    
                    <Card className="max-w-sm new w-full"
                    imgAlt={item.name}
      imgSrc={item.Url}
                    >
                    {/* <img alt="shirt" src={pic4} /> */}
                    <div className="w-full">
                      <h1 className="text-4xl font-bold">{item.name}</h1>
                    </div>
                    <a href="#">
                      <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">
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
                  </div>
    
  )
  }
})}
   
</div>
</div>
</div>
</div>
    )

}