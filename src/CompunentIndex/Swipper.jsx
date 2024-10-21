import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { FreeMode,Pagination } from 'swiper/modules';
import pic from '../assets/slider/slider1.avif';

export default function Swipper(){
    return(


        <div className="h-[85vh] "> 
    <div className="flex justify-center items-center h-40  bg-gray-200 font-serif">
        <h1 className=" text-4xl  ">
            ALL CATAGORY
        </h1>
    </div>
    <Swiper
        slidesPerView={6}
        spaceBetween={2}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
        <SwiperSlide><img src={pic} className="rounded-3xl w-[250px] h-[270px]" alt="" /></SwiperSlide>
       
      </Swiper>
</div>
)
}