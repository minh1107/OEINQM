import React, { useState } from "react";
import logo from "assets/images/logo.png";
import { pathsMain } from "util";
import 'css/header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";

const Header = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownClick = (id) => {
    setActiveDropdown(id === activeDropdown ? null : id);
  };

  return (
    <div className="box">
      <Slide />
      <div className="header">
        <div className="header__top">
          <img src={logo} className="header__top-img" alt="" />
          <p className="header__top-number">+00 9875466</p>
        </div>
        <header>
          <nav>
            <ul className="menu">
              {pathsMain.map((item) => (
                <li key={item.id} className="menu-item menu-item-text1">
                  <div className="menu-item-container">
                    <span className="menu-item-text">{item.value}</span>
                    {item.icon && <item.icon />}
                  </div>
                  {item.subNav && item.subNav}
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;