import React, { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (changeSlide == 2) {
        setChangeSlide(0);
      } else {
        setChangeSlide((pre) => pre + 1);
      }
    }, 5000);

    return () => {
      intervalId && clearInterval(intervalId);
    };
  }, [changeSlide]);

  return (
    <div className="slide">
      <div className="slide__img">
        {slideContent.map((item, index) => {
          if(changeSlide == index)
          return (
            <SlideItem
              changeSlide={changeSlide}
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
        })}
      </div>
      <div className="slide__button">
        <div
          className={`slide__process changeWidthProcess${changeSlide}`}
        ></div>
        <button
          onClick={() => handleActive(0)}
          ref={(el) => (buttonRef.current[0] = el)}
          id={`${changeSlide == 0 ? "button__active" : ""}`}
          className="slide__button-item button-image-1"
        >
          {changeSlide === 0 && <p className="slide__content-top">15</p>}
          {changeSlide === 0 && (
            <p className="slide__content-bottom">Experience</p>
          )}
        </button>
        <button
          onClick={() => handleActive(1)}
          ref={(el) => (buttonRef.current[1] = el)}
          id={`${changeSlide == 1 ? "button__active" : ""}`}
          className="slide__button-item button-image-2"
        >
          {changeSlide === 1 && <p className="slide__content-top">50</p>}
          {changeSlide === 1 && (
            <p className="slide__content-bottom">Customers</p>
          )}
        </button>
        <button
          onClick={() => handleActive(2)}
          ref={(el) => (buttonRef.current[2] = el)}
          id={`${changeSlide == 2 ? "button__active" : ""}`}
          className="slide__button-item button-image-3"
        >
          {changeSlide === 2 && (
            <img className="image__download-profile" src={dowloadProfileImg} alt="" />
          )}
          {changeSlide === 2 && (
            <p className="slide__content-bottom">Experience</p>
          )}
        </button>
      </div>
    </div>
  );
};

export default Slide;
