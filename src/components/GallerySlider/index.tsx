import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import s from "./GallerySlider.module.scss";

import Slide1 from "./images/slide1.png";

export default function GallerySlider() {
  return (
    <div className={s.slider}>
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        slidesPerGroup={1}
        loop={true}
        centeredSlides={true}
        loopFillGroupWithBlank={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Slide1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
