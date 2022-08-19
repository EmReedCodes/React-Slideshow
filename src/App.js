// //root component 
//import { useRef } from "react";
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import IMAGES from './assets';

import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function App() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide><div className="img">
        <img src={IMAGES.imageOne} alt="" />
        </div></SwiperSlide>
      <SwiperSlide><div className="img">Does</div></SwiperSlide>
      <SwiperSlide><div className="img">This</div></SwiperSlide>
      <SwiperSlide><div className="img">Work</div></SwiperSlide>

    </Swiper>
  );
}

export default App;
