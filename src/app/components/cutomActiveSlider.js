import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode, Pagination } from "swiper/modules";

import { RxArrowTopRight } from "react-icons/rx";

const ServiceData = [
    {
        title : "lol",
        backgroundImage : "/algae_01.jpg",
        content: "tascvghascvas csdc sdc ds cd sc ds c"
    },
    {
        title : "lol",
        backgroundImage : "/algae_02.png",
        content: "tascvghascvas csdc sdc ds cd sc ds c"
    },
    {
        title : "lol",
        backgroundImage : "/algae_03.png",
        content: "tascvghascvas csdc sdc ds cd sc ds c"
    },
    {
        title : "lol",
        backgroundImage : "/algae_04.jpg",
        content: "tascvghascvas csdc sdc ds cd sc ds c"
    },
    {
      title : "lol",
      backgroundImage : "/algae_05.jpg",
      content: "tascvghascvas csdc sdc ds cd sc ds c"
  }
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
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}
            >
              <img 
                src={item.backgroundImage} 
                alt={item.title} 
                style={{
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  borderRadius: '10px'
                }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default ActiveSlider
