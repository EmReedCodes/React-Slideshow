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
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
 
    >
      
      
        <SwiperSlide>
          <div className="slide">
          <h3>What the heck is MVC?</h3>
          <img src="https://media.giphy.com/media/3o6MbbwX2g2GA4MUus/giphy.gif"
          alt="Homer Simpson frantically searching through book gif"
          />
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="slide">
            <div className="stackLetters">
              <h2><span className="capital">M</span><span>odel</span></h2>
              <h2><span className='capital'>V</span><span>iews</span></h2>
              <h2><span className="capital">C</span><span>ontroller</span></h2>
            </div>
          </div>
          </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
          <p>Let's do a little throw back! Remember a little something called seperation of concern? The idea that each module or layer in an application should only be responsible for one thing. </p>
          <img src="https://media.giphy.com/media/xT5LMXD12I3SdzfRcI/giphy.gif" 
          alt="Simpson character Millhouse's mom knocking on door" srcset="" />
          <p>Well MVC is based on a similar concept. An architecture designed to keep our back end more readable and easy to change.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <img src={IMAGES.modelMVC}
         alt="snippet of mongoose code" 
         />
         <p>The Model contains our data and is the gatekeeper to the database. The Schema defines the structure of the document and is then mapped to a MongoDB document.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <img src={IMAGES.viewMVC}
         alt="snippet of ejs code" 
         />
         <p>The View is the part that that will get compiled using a templating engine for the user to see on the browser. We can update data in Views using the Model.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <img src={IMAGES.controllerMVC}
         alt="snippet of ejs code" 
         />
         <p>The Controller is the logic that controls and responds to the action the user performs from the views.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <img src={IMAGES.imageOne}
         alt="" 
         />
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="slide">Does
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="slide">This
        </div>
        </SwiperSlide>
      <SwiperSlide>
        <div className="slide">Work
        </div>
        </SwiperSlide>

    </Swiper>
  );
}

export default App;
