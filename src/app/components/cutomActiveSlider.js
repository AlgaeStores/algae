import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";
// import { ServiceData } from "../constants";

const ServiceData = [
    {
        title : "lol",
        backgroundImage : "/Frame31.png",
        content: "tascvghascvas csdc sdc ds cd sc ds c"
    },
    {
        title : "lol",
        backgroundImage : "/Frame5.png",
        content: "tascvghascvas csdc sdc ds cd sc ds c"
    },
    {
        title : "lol",
        backgroundImage : "/Frame32.png",
        content: "tascvghascvas csdc sdc ds cd sc ds c"
    },
    {
        title : "lol",
        backgroundImage : "/Frame31.png",
        content: "tascvghascvas csdc sdc ds cd sc ds c"
    },
    {
      title : "lol",
      backgroundImage : "/Frame5.png",
      content: "tascvghascvas csdc sdc ds cd sc ds c"
  },
  {
      title : "lol",
      backgroundImage : "/Frame32.png",
      content: "tascvghascvas csdc sdc ds cd sc ds c"
  },
]
const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col h-[300px] md:h-[567px] bg-[#1C2FDC]">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 2.5,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="max-w-[90%] lg:max-w-[80%]"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <img src={item.backgroundImage}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ActiveSlider