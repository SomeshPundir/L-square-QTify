// Import necessary dependencies and styles
import React from "react";
import styles from "./Carousel.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeftNavigation";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";
import { useEffect } from "react";

// Component for controlling the carousel
const Controls = ({ data }) => {
  // Access the Swiper instance using the useSwiper hook
  const { swiper } = useSwiper();

  // Effect to reset the carousel to the first slide when 'data' changes
  useEffect(() => {
    swiper?.slideTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Placeholder component to render no additional content
  return <></>;
};

// Main Carousel component
const Carousel = ({ data, renderCardComponent }) => {
  // Render the main carousel component
  return (
    <div className={styles.wrapper}>
      {/* Swiper component for the carousel */}
      <Swiper
        initialSlide={0}
        modules={{ Navigation }}
        slidesPerView={"auto"}
        spaceBetween={10}
        allowTouchMove
      >
        {/* Controls component for managing the carousel */}
        <Controls data={data} />
        
        {/* Left navigation button for the carousel */}
        <CarouselLeftNavigation />
        
        {/* Right navigation button for the carousel */}
        <CarouselRightNavigation />
        
        {/* Map through the 'data' array and render SwiperSlides using the provided renderCardComponent */}
        {data?.map((item) => (
          <SwiperSlide key={item?.id}>{renderCardComponent(item)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Export the Carousel component
export default Carousel;
