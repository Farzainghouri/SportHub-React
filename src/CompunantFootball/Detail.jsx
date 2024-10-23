
import React from "react";
import '../routes/Index';
import pic from '../assets/Football/footballslider.jpg';
import pic3 from '../assets/slider/slider3.jpg';
import pic4 from '../assets/slider/slider4.jpg';
import pic5 from '../assets/slider/slider5.jpg';
import pic6 from '../assets/slider/slider6.jpg';
import '../App.css'

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const images = [pic,pic4, pic6,pic3,pic5,];


  
 export default function Slideshow(props) {
  
      return (
        <div className="h-fit">
          

        <div className="slide-container">
          <Zoom scale={1.5}>
          {
               images.map((each, index) => <img key={index} style={{width: "100vw"}} className="h-[45vh] sm:h-[65vh] md:h-[100vh]" src={each} />)
            }
          </Zoom>
        </div>


        {/* Swiper  */}


        {/* {
                title.map((each, index) => <img key={index} style={{width: "100vw",height:"100vh"}} src={each} />)
            } */}






    </div>
      )
  }
    




  


    
