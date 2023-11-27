import React from 'react';
import { useSwiper } from 'swiper/react';
 const SwiperNav=()=>{
    const swiper=useSwiper();
    return(
            <div>
                <button onClick={()=>{
                    swiper.slidePrev()
                }}>previous</button>
                <button onClick={()=>{
                    swiper.slideNext()
                }}>Next</button>

            </div>
    )
}
export default SwiperNav;