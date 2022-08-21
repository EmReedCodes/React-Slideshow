// //root component 

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";
import IMAGES from './assets';

import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import 'swiper/css/effect-flip'
import 'swiper/css/a11y'

function App() {


  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      centeredSlides={true}
      navigation
      pagination={{ clickable: true }}
      // effect= {"fade"}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      a11y= {true}
 
    >
      
      
        <SwiperSlide>
          <div className="slide">
          <h1>What the heck is MVC?</h1>
          <div className="imgContain">
            <img src="https://media.giphy.com/media/3o6MbbwX2g2GA4MUus/giphy.gif"
            alt="Homer Simpson frantically searching through book gif"
            />
          </div>
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
          <div className="imgContain">
            <img src="https://media.giphy.com/media/xT5LMXD12I3SdzfRcI/giphy.gif"
            alt="Simpson character Millhouse's mom knocking on door"
            srcset=""
            />
          </div>
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
        <div className="imgContain">
          <img src={IMAGES.viewMVC}
           alt="snippet of ejs code"
           />
        </div>
         <p>The View is the part that that will get compiled using a templating engine for the user to see on the browser. We can update data in Views using the Model.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <div className="imgContain">
          <img src={IMAGES.controllerMVC}
           alt="snippet of ejs code"
           srcset=""
           />
        </div>
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
           srcSet=''
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
        <p>A model provides an interface to MongoDB for CRUD actions.</p>
        <div className="imgContain">
          <img src={IMAGES.mongooseEx}
           alt="snippet of ejs code"
           />
        </div>
        <p>While the schema is what defines the structure of the document.</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
      
        <div className="imgContain">
          <img src="https://media.giphy.com/media/gh0lZ8iSGWLdMHrrBP/giphy.gif"
           alt="snippet of ejs code"
           />
        </div>
        <p>So MVC sounds great but is there really that much benefit to implement it into my projects?</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
          
        <div className="advantage">
          <h2>Advantages:</h2>
          <h4>Faster Development Process</h4>
          <h4>Ability To Provide Multiple Views</h4>
          <h4>Support for Async Technique</h4>
          <h4>Modification Does Not Affect Entire Model</h4>
          <h4>Returns Data Without Formatting</h4>
          <h4>SEO Friendly Development</h4>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
          
        <div className="advantage">
          <h2>Disadvantages:</h2>
          <h4>Manipulation of Dom Cost Time</h4>
          <h4>Views Can Get Overburdened</h4>
          <h4>No Formal Validation Support</h4>
          <h4>Isolated Deployment Can Get Complicated</h4>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <p>Doesn't this nice organized file setup make the pros outweight the cons?</p>
        <div className="imgContain">
          <img src={IMAGES.fileSetup}
           alt="snippet of ejs code"
           />
        </div>
        <p>I sure think so!</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide">
        <p>I hope you enjoyed my slideshow!</p>
        <div className="imgContain">
          <img src="https://media.giphy.com/media/EPQfELrp20REY/giphy.gif"
           alt="snippet of ejs code"
           />
        </div>
        <h3>Created by: Emily Reed</h3>
        </div>
        </SwiperSlide>
    </Swiper>
  );
}

export default App;
