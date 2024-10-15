"use client";
import React from "react";
import '../routes/Index'; // Import Tailwind CSS first
import pic from '../assets/slider1.avif';
import pic2 from '../assets/slider2.jpg';
import pic3 from '../assets/bat.jpg';
import pic4 from '../assets/ball.jpg';
import '../App.css'

import 'react-slideshow-image/dist/styles.css'
import { Card } from "flowbite-react";



const images = [
    pic,
    pic2,
    pic,
    pic,
    pic,
    pic,
    pic,
    pic,
  ];

export default function Cricket(){
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
 className="max-w-sm "
 imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
 imgSrc={pic3}
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
     className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
   >
    BUY
   </a>
 </div>
</Card>
   </div>
   <div className=" w-[23%]  my-4">
   <Card
 className="max-w-sm h-full"
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
     className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
   >
    BUY
   </a>
 </div>
</Card>
   </div>
   <div className=" w-[23%]  my-4">
   <Card
 className="max-w-sm h-full"
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
     className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
   >
    BUY
   </a>
 </div>
</Card>
   </div>
   <div className=" w-[23%]  my-4">
   <Card
 className="max-w-sm h-full"
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
     className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
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