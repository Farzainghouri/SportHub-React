
import React from "react";
import '../routes/Index'; // Import Tailwind CSS first
import pic from '../assets/Basketball/ball.jpg';
import pic2 from '../assets/Basketball/shose.jpg';
import pic3 from '../assets/Basketball/net.jpg';
import pic4 from '../assets/Basketball/shirt.jpg';
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
            className="max-w-sm new w-full my-4"

      imgAlt="ball"
      imgSrc={pic}
    >

      <div className="w-[23%]">
        <h1 className="text-4xl font-bold">
          Ball
        </h1>
      </div>
      <a href="#">
        <h5 className="font-semibol  tracking-tight text-gray-700 dark:text-white">
          New Ball, Made In Pakistan
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$50</span>
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
            className="max-w-sm new w-full my-4"

      imgAlt="shose"
      imgSrc={pic2}
    >
      
      <div className="w-[23%]">
        <h1 className="text-4xl font-bold">
          Shose
        </h1>
      </div>
      <a href="#">
        <h5 className="font-semibol  tracking-tight text-gray-700 dark:text-white">
          New Shose, Made In Pakistan
        </h5>
      </a>
     
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$150</span>
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
            className="max-w-sm new  my-4"

      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={pic3}
    >
      <div className="w-[23%]">
        <h1 className="text-4xl font-bold">
          Net
        </h1>
      </div>
      <a href="#">
        <h5 className="font-semibol  tracking-tight text-gray-700 dark:text-white">
          New Net, Made In Pakistan
        </h5>
      </a>
     
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$100</span>
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
     className="max-w-sm new  my-4"

      imgAlt="Apple Watch Series 7 in colors pink, silver, and black"
      imgSrc={pic4}
    >
      <div className="w-[23%]">
        <h1 className="text-4xl font-bold">
          Shirt
        </h1>
      </div>
      <a href="#">
        <h5 className="font-semibol  tracking-tight text-gray-700 dark:text-white">
          New Shirt, Made In Pakistan
        </h5>
      </a>
      
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">$87</span>
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
