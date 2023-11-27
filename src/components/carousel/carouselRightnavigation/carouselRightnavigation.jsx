import React, { useEffect } from "react";
import { useSwiper } from 'swiper/react';
import styles from './carouselRightnavigation.css';
import rightArrowImage from '../../assets/rightArrow.png';

export default function CarouselRightNav() {
  const swiper = useSwiper();
  const [isEnd, setIsEnd] = React.useState(swiper.isEnd);

  useEffect(() => {
    swiper.on("slideChange", function () {
      setIsEnd(swiper.isEnd);
    });
  }, [swiper]);

  return (
    <div className={styles.rightNavigation}>
      {isEnd && <img src={rightArrowImage} alt="Right Arrow" onClick={() => swiper.slideNext()} />}
    </div>
  );
}
