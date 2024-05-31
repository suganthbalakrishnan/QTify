import React from "react";
import "./Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import { useEffect } from "react";

const Controls = ({ data }) => {
  const swiper = useSwiper();
  useEffect(() => {
    swiper.slideTo(0,1);
  });

  return <></>;
};

const Carousel = ({ data, renderCardComponent }) => {
  return (
    <div className="carousel-wrapper">
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={7}
        spaceBetween={10}
        allowTouchMove
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          480: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
          1400: {
            slidesPerView: 7,
            spaceBetween: 10,
          },
        }}
      >
        <Controls data={data} />
        <CarouselLeftNavigation />
        <CarouselRightNavigation />
        {data.map((item) => (
          <SwiperSlide key={item.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;