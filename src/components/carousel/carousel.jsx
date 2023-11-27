import React, { useEffect } from "react";
import {Swiper ,SwiperSlide} from 'swiper/react';
import {useSwiper} from 'swiper/react';
import {Navigation}from 'swiper';
import CarouselLeftNav from './carouselLeftnavigation/carouselLeftnavigation'
import CarouselRightNav from './carouselRightnavigation/carouselRightnavigation'
import styles from './carousel.css'
import "swiper/css";

const Controls=({data})=>{
    const swiper=useSwiper();
    useEffect(()=>{ 
        swiper.slideTo(0,1);
    },[swiper]);
    return <></>
}
export default function Carousel({data,renderComponent}){
    const dataArray = Array.isArray(data) ? data : [];

    
  return( <div className={styles.wrapper}>
    <Swiper 
    style={{padding:"0px 20px"}}
    initialSlide={0}
    modules={[Navigation]}
    slidesPerView={"auto"}
    spaceBetween={40}
    allowTouchMove>
        <Controls data={dataArray}/>
        <CarouselLeftNav/>
        <CarouselRightNav/> 
        {/* this is returning the correct data
        {/* {console.log('this is the important daata')};

        {console.log(dataArray)}; */}
        {/* <CoruselButton/> */}

        {dataArray.map((ele)=>(
        <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
        ))}
    </Swiper>
        </div>) ;
}