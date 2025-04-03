import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import Video1 from "../videos/video1.mp4";
import Video2 from "../videos/video2.mp4";
import Video3 from "../videos/video3.mp4";
import Video4 from "../videos/video4.mp4";
import Video5 from "../videos/video5.mp4";
import Video6 from "../videos/video6.mp4";
import Video7 from "../videos/video4.mp4";
import Video8 from "../videos/video3.mp4";




export default function CarSlider() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <div className="relative w-full mx-auto">
      <Swiper
        modules={[Autoplay, Navigation]}
        loop={true}
        slidesPerView={4}
        centeredSlides={false}
        spaceBetween={40}
        autoplay={{ delay:2000, disableOnInteraction: false }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          990: {
            slidesPerView: 4,
          },
          770: {
            slidesPerView: 3,
          },
          570: {
            slidesPerView: 2,
          },
          100: {
            slidesPerView: 1,
          },
        }}
        className="w-full"
      >
        {[Video1,Video2,Video3,Video4,Video5,Video6,Video7,Video8].map((item, index) => (
          <SwiperSlide key={index} className="flex items-start justify-center">
                        <div className="w-[240px] h-[450px]  shadow-md rounded-md">
                            <video
                                controls
                                autoPlay
                                loop 
                                muted 
                                className={`w-full h-full rounded-md transition-all object-cover duration-1000 ease-in-out transform ${
                                  index === activeIndex ? "scale-100" : "scale-100"
                                }`} >
                                <source src={item} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
