import React, { useEffect, useState } from "react";
import { useSwiper } from 'swiper/react';
import styles from './carouselLeftnavigation.css';
import leftArrowImage from '../../assets/leftArrow.png';

export default function CarouselLeftNav() {
  const swiper = useSwiper();
  const [isBeginning, setIsBeginning] = useState(swiper.isBeginning);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsBeginning(swiper.isBeginning);
    });
  }, [swiper]);

  return (
    <div className={styles.leftNavigation}>
      {isBeginning && <img src={leftArrowImage} alt="Left Arrow" onClick={() => swiper.slidePrev()} />}
    </div>
  );
}
