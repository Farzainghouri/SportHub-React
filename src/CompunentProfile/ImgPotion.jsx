import React from "react";
import Dp from "../assets/profile/dp.jpg"
import "../App.css"
export default function ImgPotion(){
    return(
        <div className="bg-gray-700 ">

        <div className="h-[29vw] profile-bg w-full flex justify-center items-end">
            <div className="">
                <img src={Dp} className="w-[15vw] mb-[-22px] rounded-full border-white border-8" />
            </div>
            
        </div>
        <h1 className="text-center mt-12 font-bold text-4xl">
            hellow
        </h1>
        <h1 className="text-center text-gray-400 pb-6  font-semibold text-lg">
            zain007@gmail.com
        </h1>

        
        </div>

    )
}