import React, { useState } from "react";
import logo from "assets/images/logo.png";
import { pathsMain, slideContent } from "util";
import 'css/header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

const Header = () => {
  const [showSlide, setShowSlide] = useState(1);

  return (
    <div className="">
      <Slide />
      <div className="header">
        <div className="header__top">
          <img src={logo} className="header__top-img" alt="" />
          <p className="header__top-number">
            +00 9875466
          </p>
        </div>
        <div className="header__main">
          {pathsMain?.map((el) => (
            <div className="header__main-item flex justify-between items-center pt-[13px] hover:cursor-pointer">
              <p>{el?.value}</p>
              {el?.icon && <el.icon />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
