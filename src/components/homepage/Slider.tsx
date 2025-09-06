"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { Swiper as SwiperCore } from "swiper/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade"; // ✅ Import fade styles

const Slider = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  return (
    <div className="w-full bg-white relative overflow-hidden">
      {/* Custom Navigation Buttons */}
      <div className="absolute top-1/2 -translate-y-1/2 left-2 z-10">
        <button
          ref={prevRef}
          className="text-3xl text-black bg-white p-2 rounded-full shadow-md"
        >
          ‹
        </button>
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 right-2 z-10">
        <button
          ref={nextRef}
          className="text-3xl text-black bg-white p-2 rounded-full shadow-md"
        >
          ›
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay, EffectFade]} // ✅ Add EffectFade
        effect="fade" // ✅ Use fade effect
        fadeEffect={{ crossFade: true }} // ✅ Optional crossfade
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper: SwiperCore) => {
          if (
            typeof swiper.params.navigation !== "boolean" &&
            swiper.params.navigation
          ) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="w-full h-[500px] bg-cover bg-top"
            style={{
              backgroundImage:
                "url('/images/homepage/slider/slider1/slide.jpg')",
            }}
            aria-label="Ganesh Background"
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="w-full h-[500px] bg-cover bg-top"
            style={{
              backgroundImage:
                "url('/images/homepage/slider/slider2/slide.jpg')",
            }}
            aria-label="Ganesh Background"
          />
        </SwiperSlide>
        {/* Add more slides if needed */}
      </Swiper>
    </div>
  );
};

export default Slider;
