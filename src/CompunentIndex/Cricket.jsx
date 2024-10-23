
// import 'flowbite';
// import { useEffect } from "react";
import React from "react";
import '../routes/Index'; 
import pic from '../assets/Cricket/bat.jpg';
import pic2 from '../assets/Cricket/ball.jpg';
import pic3 from '../assets/Cricket/pad.jpg';
import pic4 from '../assets/Cricket/shose.jpg';
// import pic2 from '../assets/slider/slider2.jpg';

import '../App.css'


import { Card } from "flowbite-react";





export default function Cricket(){
    return(
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

<div className="px-12 text-xl py-4 hover:text-red-400 text-end">
  <a href="#">See More</a>
</div>

</div>
    )
}



// <div className="flex justify-center items-center h-40  bg-gray-200 font-serif">
// <h1 className=" text-4xl  ">
//     CRICKET
// </h1>
// </div>

//   <div className="w-[100%] gap-[1.5%] flex flex-wrap mx-1">
// <div className=" w-[23%] my-4">
// <Card
// className="max-w-sm new"
// imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
// imgSrc={pic}
// >

// <div>
// <h1 className="text-4xl font-bold">
//   Bat
// </h1>
// </div>
// <a href="#">
// <h5 className="font-semibol  tracking-tight text-gray-700 dark:text-white">
//   New Bat, Made In Pakistan
// </h5>
// </a>

// <div className="flex items-center justify-between">
// <span className="text-3xl font-bold text-gray-900 dark:text-white">$35</span>
// <a
//   href="#"
//   className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
// >
//  BUY
// </a>
// </div>
// </Card>
// </div>
// <div className=" w-[23%]  my-4">
// <Card
// className="max-w-sm new "
// imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
// imgSrc={pic2}
// >
// <div className="w-[23%]">
// <h1 className="text-4xl font-bold">
//   Ball
// </h1>
// </div>
// <a href="#">
// <h5 className="font-semibol  tracking-tight text-gray-700 dark:text-white">
//   New Ball, Made In Pakistan
// </h5>
// </a>

// <div className="flex items-center justify-between">
// <span className="text-3xl font-bold text-gray-900 dark:text-white">$13</span>
// <a
//   href="#"
//   className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
// >
//  BUY
// </a>
// </div>
// </Card>
// </div>
// <div className=" w-[23%]  my-4">
// <Card
// className="max-w-sm new "
// imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
// imgSrc={pic3}
// >
// <div className="w-[23%]">
// <h1 className="text-4xl font-bold">
//   Pad
// </h1>
// </div>
// <a href="#">
// <h5 className="font-semibol  tracking-tight text-gray-700 dark:text-white">
//   New Pad, Made In Pakistan
// </h5>
// </a>

// <div className="flex items-center justify-between">
// <span className="text-3xl font-bold text-gray-900 dark:text-white">$139</span>
// <a
//   href="#"
//   className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
// >
//  BUY
// </a>
// </div>
// </Card>
// </div>
// <div className=" w-[23%]  my-4">
// <Card
// className="max-w-sm new"
// imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
// imgSrc={pic4}
// >
// <div className="w-[23%]">
// <h1 className="text-4xl font-bold">
//   Shose
// </h1>
// </div>
// <a href="#">
// <h5 className="font-semibol  tracking-tight text-gray-700 dark:text-white">
//   New Shose, Made In Pakistan
// </h5>
// </a>

// <div className="flex items-center justify-between">
// <span className="text-3xl font-bold text-gray-900 dark:text-white">$179</span>
// <a
//   href="#"
//   className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
// >
//  BUY
// </a>
// </div>
// </Card>
// </div>

// </div>
// <div className=" px-12 text-xl py-4 hover:text-red-400 text-end ">
//   <a href="#">Sea More</a>
// </div>