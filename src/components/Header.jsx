import React, { useState } from "react";
import logo from "assets/images/logo.png";
import navbarimg from 'assets/images/navbarimg.png'
import { pathsMain, slideContent } from "util";
import 'css/header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

const Header = () => {
  return (
    <div className="box">
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
            <div className="header__main-item">
              <p>{el?.value}</p>
              {el?.icon && <el.icon />}
                <div className="header__main-navbar">
                  <ul>
                    <li>Introduce</li>
                    <li>Our People</li>
                    <li>QHSE</li>
                    <li>Asset And Facility</li>
                  </ul>
                  <img src={navbarimg} alt="" />
                  <div className="header__main-navbar-introduce">
                    <h1>Introduce</h1>
                    <p>The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation</p>
                    <button>SEE MORE +</button>
                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
