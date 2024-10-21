
import React from "react";
import '../routes/Index';
import pic from '../assets/slider/slider1.avif';
// import pic2 from '../assets/slider/slider2.jpg';
import pic3 from '../assets/slider/slider3.jpg';
import pic4 from '../assets/slider/slider4.jpg';
import pic5 from '../assets/slider/slider5.jpg';
import pic6 from '../assets/slider/slider6.jpg';
import '../App.css'

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const images = [pic, pic6,pic3,pic4,pic5,];


  
 export default function Slideshow(props) {
  
      return (
        <div className="h-fit">
          

        <div className="slide-container">
          <Zoom scale={1.5}>
          <img  style={{width: "100vw",height:"100vh"}} src={images[0]} />
          <img  style={{width: "100vw",height:"100vh"}} src={images[1]} />
          <img  style={{width: "100vw",height:"100vh"}} src={images[2]} />
          <img  style={{width: "100vw",height:"100vh"}} src={images[3]} />
          <img  style={{width: "100vw",height:"100vh"}} src={images[4]} />
          </Zoom>
        </div>


        {/* Swiper  */}


        {/* {
                title.map((each, index) => <img key={index} style={{width: "100vw",height:"100vh"}} src={each} />)
            } */}






    </div>
      )
  }
    




  


    
