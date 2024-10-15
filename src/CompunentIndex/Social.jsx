import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import pic2 from '../assets/slider2.jpg';


export default function Social(){
    return(
        <div className='h-[80vh] flex justify-center items-center w-full'>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={pic2} className='w-full h-80' /></SwiperSlide>
        <SwiperSlide><img src={pic2} className='w-full h-80' /></SwiperSlide>
        <SwiperSlide><img src={pic2} className='w-full h-80' /></SwiperSlide>
        
       
      </Swiper>
        </div>
    )
}