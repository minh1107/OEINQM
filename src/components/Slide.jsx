import React, { useRef, useState } from "react";
import Slider from "react-slick";
import SlideItem from "./SlideItem";
import { slideContent } from "util";
import "css/slide.css";
import dowloadProfileImg from "assets/images/downloadprofile.svg";

const Slide = () => {
  const [changeSlide, setChangeSlide] = useState(1);
  const buttonRef = useRef([]);

  const handleActive = (number) => {
    buttonRef.current.forEach((item, index) => {
      if (index === number) {
        buttonRef.current[number].id = "button__active";
      } else {
        buttonRef.current[index].id = null;
      }
    });
    setChangeSlide(number);
  };

  return (
    <div className="slide">
      {slideContent.map((item, index) => {
        if (changeSlide == index) {
          return (
            <SlideItem
              key={item.id}
              className={item.class}
              titleBottomColor={item.titleBottomColor}
              titleBottomNoColor={item.titleBottomNoColor}
              titleTop={item.titleTop}
              content={item.content}
              buttonTextTop={item.buttonTextTop}
              buttonTextBottom={item.buttonTextBottom}
            />
          );
        }
      })}
      <div className="slide__button">
        <button
          onClick={() => handleActive(0)}
          ref={(el) => (buttonRef.current[0] = el)}
          className="slide__button-item button-image-1"
        >
          {changeSlide === 0 && <p className="slide__content-top">15</p>}
          {changeSlide === 0 && <p className="slide__content-bottom">Experience</p>}
        </button>
        <button
          onClick={() => handleActive(1)}
          ref={(el) => (buttonRef.current[1] = el)}
          className="slide__button-item button-image-2"
        >
          {changeSlide === 1 && <p className="slide__content-top">50</p>}
          {changeSlide === 1 && <p className="slide__content-bottom">Customers</p>}
        </button>
        <button
          onClick={() => handleActive(2)}
          ref={(el) => (buttonRef.current[2] = el)}
          className="slide__button-item button-image-3"
        >
          {changeSlide === 2 && <img src={dowloadProfileImg} height={64} width={64} alt="" />}
          {changeSlide === 2 && <p className="slide__content-bottom">Experience</p>}
        </button>
      </div>
    </div>
  );
};

export default Slide;