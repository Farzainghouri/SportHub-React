
import React from "react";
import '../routes/Index'; // Import Tailwind CSS first
import pic from '../assets/slider/slider1.avif';

import '../App.css'

import 'react-slideshow-image/dist/styles.css'
import { Card } from "flowbite-react";





export default function BasketBall(){
    return(
      <div className="">
      <div className="flex justify-center items-center h-40  bg-gray-200 font-serif">
   <h1 className=" text-4xl  ">
       BASKETBALL
   </h1>
</div>

   <div className="w-[100%] gap-[1.5%] flex flex-wrap mx-1">
   <div className=" w-[23%] my-4">
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
 className="max-w-sm new "
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
  
  
  

</div>

<div className="text-end px-12 text-xl py-4 hover:text-red-400 ">
    <a href="#">Sea More</a>
</div>
</div>
    )
}
