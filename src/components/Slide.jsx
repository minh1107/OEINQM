import React from "react";
import Slider from "react-slick";
import SlideItem from "./SlideItem";
import { slideContent } from "util";
import 'css/slide.css'

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
const Slide = () => {
  return (
    <Slider {...settings}>
      {slideContent.map((item) => (
        <SlideItem key={item.id} className={item.class} titleBottom={item.titleBottom} titleTop={item.titleTop} content={item.content}/>
      ))}
    </Slider>
  );
};

export default Slide;
