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
              <h2><span className="capital">M</span><span>odel</span></h2>
              <h2><span className='capital'>V</span><span>iews</span></h2>
              <h2><span className="capital">C</span><span>ontroller</span></h2>
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
        <div className="imgContain">
          <img src={IMAGES.modelMVC}
           alt="snippet of mongoose code"
           />
        </div>
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
        <div className="imgContain">
          <img src={IMAGES.mvcDemo}
           alt="snippet of ejs code"
           />
        </div>
         <p>MVC works in harmony to get the request from the User and through the controllers it can be sent to Model to fetch our data and back to the controller to Views.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <p>Let's test this out! The User decides they want a new item on the todo list! Through the page that was rendered with ejs in Views they click on the Submit button.</p>
        <div className="imgContain">
          <img src={IMAGES.ejsTodo}
           alt="snippet of ejs code"
           />
        </div>
         <p>This code heads off to Routes which is sent to our friend and logic keeper the Controller.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <img src={IMAGES.vrcMeme}
         alt="" 
         />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <p>A lot happens here at airport traffic control. First we head off to Model where we await our todo item to be created with our Mongoose schema.</p>
        <div className="imgContain">
          <img src={IMAGES.controllerTodo}
           alt="snippet of ejs code"
           />
        </div>
         <p>Once its's finished we get our promise back that the data has arrived and we can now update our Views to render the new item we added.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <p>You may still be wondering about what's going on at Model. What is a Mongoose model and this schema magic?</p>
        <div className="imgContain">
          <img src={IMAGES.mongooseMeme}
           alt="snippet of ejs code"
           />
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <p>A Mongoose Model defines the interface for interacting with our DB. The model is what handles the reading, creating, updating, and deleting of documents.</p>
        
        <div className="imgContain">
          <img src={IMAGES.modelMVC}
           alt="snippet of ejs code"
           />
        </div>
        <p>A schema answers the the question, "What will the data in the mongoDB collection look like?"</p>
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
