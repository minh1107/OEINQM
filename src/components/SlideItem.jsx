import React from "react";

const SlideItem = ({ className, titleTop, titleBottomColor, titleBottomNoColor, content}) => {
  return (
    <div className={`${className} slide__item`}>
      <h1 className="slide__title">
        <p>{titleTop}</p>
        <span className="slide__title-bottom">
          <span className="slide__title-color">{titleBottomColor}</span> {" "}
          <span>{titleBottomNoColor}</span>
        </span>
      </h1>
      <p className="slide__content">{content}</p>
    </div>
  );
};

export default SlideItem;
