import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation } from 'swiper/modules';
import pic from '../assets/social/cocacola.jpg';
import pic2 from '../assets/social/eat.jpg';
import pic3 from '../assets/social/shosead.jpg';


export default function Social(){
    return(
        <div className='h-[40vh] sm:h[30vh] md:h-[60vh] flex justify-center items-center w-full'>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src={pic} className='w-full h-[40vh] sm:h[60vh] md:h-[60vh]' /></SwiperSlide>
        <SwiperSlide><img src={pic2} className='w-full h-[40vh] sm:h[60vh] md:h-[60vh]' /></SwiperSlide>
        <SwiperSlide><img src={pic3} className='w-full h-[40vh] sm:h[60vh] md:h-[60vh]' /></SwiperSlide>
        
       
      </Swiper>
        </div>
    )
}