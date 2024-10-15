"use client";
// import { Card } from "flowbite-react";
// import { useEffect } from "react";
// import 'flowbite';
import React from "react";
import '../routes/Index';
import pic from '../assets/slider1.avif';
import pic2 from '../assets/slider2.jpg';
import '../App.css'

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'




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
  
 export default function Slideshow  () {
      return (
        <div className="h-fit">

        <div className="slide-container">
          <Zoom scale={1.5}>
            {
                images.map((each, index) => <img key={index} style={{width: "100vw",height:"100vh"}} src={each} />)
            }
          </Zoom>
        </div>


        {/* Swiper  */}









    </div>
      )
  }
    




  


    