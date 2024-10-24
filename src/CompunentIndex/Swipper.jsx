import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode,Pagination } from 'swiper/modules';
import pic from '../assets/Basketball/ball.jpg';
import pic2 from '../assets/Basketball/shose.jpg';
import pic3 from '../assets/Basketball/net.jpg';
import pic4 from '../assets/Basketball/shirt.jpg';
import pic5 from '../assets/Cricket/bat.jpg';
import pic6 from '../assets/Cricket/ball.jpg';
import pic7 from '../assets/Cricket/pad.jpg';
import pic8 from '../assets/Cricket/shose.jpg';
import pic9 from '../assets/Football/ball.jpg';
import pic10 from '../assets/Football/glove.jpg';
import pic11 from '../assets/Football/shose.jpg';
import pic12 from '../assets/Football/shirt.jpg';
import pic13 from '../assets/Tennis/racket.jpg';
import pic14 from '../assets/Tennis/ball.jpg';
import pic15 from '../assets/Tennis/net.jpg';
import pic16 from '../assets/Tennis/shose.jpg';
export default function Swipper(){

  const img = [
    pic9,pic12,pic4,pic7,pic6,pic16,pic13,pic15,pic3,pic2,pic5,pic8,pic11,pic2,pic14,pic10,pic2,pic
  ]
    return(


        <div className="h-[60vh] xl:h-[75vh]"> 
    <div className="flex justify-center items-center h-40  bg-gray-200 font-serif">
        <h1 className=" text-4xl  ">
            ALL CATAGORY
        </h1>
    </div>
    <Swiper
  slidesPerView={6} // Default for large screens
  spaceBetween={2}  // Default spacing
  freeMode={true}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 2,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
    // when window width is >= 1280px
    1280: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  }}
  modules={[FreeMode, Pagination]}
  className="mySwiper"
>
  
  {
      img.map((each, index) => <SwiperSlide key={index} className='h-[300px]'><img  src={each} className=" rounded-3xl w-full hover:-z-20 h-[230px]" alt="" /><button className='text-center w-full bg-red-700 hover:bg-red-900 rounded-lg text-white h-[30px]'>Buy</button> </SwiperSlide>
      
    )
      }
 
</Swiper>

</div>
)
}




{/* <SwiperSlide><img src={pic2} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic5} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic9} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic13} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic3} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic6} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic9} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic12} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic16} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic7} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic15} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic14} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic4} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide>
<SwiperSlide><img src={pic2} className="rounded-3xl w-full h-[270px]" alt="" /></SwiperSlide> */}
