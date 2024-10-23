
import React from "react";
import '../routes/Index';
import pic from '../assets/Tennis/tennisslider.png';
import pic3 from '../assets/slider/slider3.jpg';
import pic4 from '../assets/slider/slider4.jpg';
import pic5 from '../assets/slider/slider5.jpg';
import pic6 from '../assets/slider/slider6.jpg';
import '../App.css'

import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


const images = [pic, pic6,pic5,pic3,pic4,];


  
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


      






    </div>
      )
  }
    




  


    
