
"use client";
import '../routes/Index'; // Import Tailwind CSS first
// import 'flowbite';
// import { useEffect } from "react";
import logo from '../assets/logo.png'
import SellLogo from '../assets/sell.jpg'


export  default function Component() {
    // useEffect(() => {
    //     import("flowbite"); // Reinitialize Flowbite after mount
    //   }, []);

  return (
   <div className='w-full h-14 z-50 bottom-0 bg-white fixed'>
    <button className='flex justify-center w-full'>
        <a href="/Add">
    <img src={SellLogo} alt="" className='h-16 absolute bottom-6  rounded-full'/>

        </a>
    </button>
   </div>
  );
}
