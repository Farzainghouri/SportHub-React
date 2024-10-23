

import React, { useEffect, useState } from "react";
import '../routes/Index'; 
import pic from '../assets/Tennis/racket.jpg';
import pic2 from '../assets/Tennis/ball.jpg';
import pic3 from '../assets/Tennis/net.jpg';
import pic4 from '../assets/Tennis/shose.jpg';
import '../App.css'
import {db} from "../Firebase/Firebase";
import { Card } from "flowbite-react";
import { collection, getDocs } from "firebase/firestore";
import "../App.css"




export default function TennisData(){
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
        <div className="">
       <div className="flex justify-center items-center h-40 bg-gray-200 font-serif">
  <h1 className="text-4xl">TENNIS</h1>
</div>

<div className="w-full gap-4 flex flex-wrap justify-center mx-1">
  <div className="w-full md:w-[48%] lg:w-[23%] my-4">
    <Card className="max-w-sm new">
      <img alt="tennis racket" src={pic} />
      <div>
        <h1 className="text-4xl font-bold">Rackets</h1>
      </div>
      <a href="#">
        <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">New Racket, Made In Pakistan</h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$115</span>
        <a
          href="#"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          BUY
        </a>
      </div>
    </Card>
  </div>

  <div className="w-full md:w-[48%] lg:w-[23%] my-4">
    <Card className="max-w-sm new">
      <img alt="tennis ball" src={pic2} />
      <div className="w-full">
        <h1 className="text-4xl font-bold">Ball</h1>
      </div>
      <a href="#">
        <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">New Ball, Made In Pakistan</h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$19</span>
        <a
          href="#"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          BUY
        </a>
      </div>
    </Card>
  </div>

  <div className="w-full md:w-[48%] lg:w-[23%] my-4">
    <Card className="max-w-sm new">
      <img alt="tennis net" src={pic3} />
      <div className="w-full">
        <h1 className="text-4xl font-bold">Net</h1>
      </div>
      <a href="#">
        <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">New Net, Made In Pakistan</h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$399</span>
        <a
          href="#"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          BUY
        </a>
      </div>
    </Card>
  </div>

  <div className="w-full md:w-[48%] lg:w-[23%] my-4">
    <Card className="max-w-sm new">
      <img alt="tennis shoes" src={pic4} />
      <div className="w-full">
        <h1 className="text-4xl font-bold">Shoes</h1>
      </div>
      <a href="#">
        <h5 className="font-semibold tracking-tight text-gray-700 dark:text-white">New Shoes, Made In Pakistan</h5>
      </a>
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$249</span>
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

</div>

<div>
  <div>
<div className="w-[100%] gap-[1.5%] flex flex-wrap mx-1">


        {data.map(item => { 
             
                if (item.cata == "tennis") {
                  
                  console.log(item.name);
                  return ( 

                    
                                  <Card key={item.id}
      className="max-w-sm new w-[23%] my-4"
      imgAlt={item.name}
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
       
    )

}