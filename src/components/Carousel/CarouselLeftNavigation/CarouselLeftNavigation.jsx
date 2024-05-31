import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useState } from "react";
import "./CarouselLeftNavigation.css";
import { ReactComponent as LeftArrow } from "../../../assets/LeftArrow.svg";

const CarouselLeftNavigation = () => {
  const swiper = useSwiper();

  const [isBegin, setIsBegin] = useState(true);

  useEffect(() => {
    swiper.on("slideChange", () => {
      setIsBegin(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className="leftNavigation">
      {!isBegin && <LeftArrow onClick={() => swiper.slidePrev()} />}
    </div>
  );
};

export default CarouselLeftNavigation;