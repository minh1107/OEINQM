import React, { useState } from "react";
import "css/menu.css";
import logo from "assets/images/logo.png";
import icons from "util/icons";

const { TfiClose, BsChevronDown } = icons;
const Menu = ({ setIsShowMenu }) => {
  const [isShowSubmenu, setIsShowSubmenu] = useState(false);
  const handleCloseMenu = () => {
    setIsShowMenu(false);
  };
  const handleShowSubmenu = () => {
    setIsShowSubmenu((pre) => !pre);
  };
  return (
    <div className="menu-mobile">
      <div className="menu-mobile__header">
        <img src={logo} className="menu-mobile-img" alt="" />
        <div onClick={handleCloseMenu} className="menu-mobile__close">
          <TfiClose color="white" size={23} />
        </div>
      </div>
      <ul className="menu-mobile-list">
        <li>HOME</li>
        <li onClick={handleShowSubmenu}>
          ABOUT US <BsChevronDown size={18} />
        </li>
        {isShowSubmenu && (
          <ul className="menu-mobile-submenu">
            <li>Introduction</li>
            <li>Our People</li>
            <li>Introduction</li>
            <li>Introduction</li>
            <li>Introduction</li>
          </ul>
        )}
        <li>SERVICE</li>
        <li>PROJECT</li>
        <li>CAREERS</li>
        <li>
          NEWS & EVENT <BsChevronDown size={18} />
        </li>
      </ul>
      <div className="menu-mobile-about">
        <ul>
          <li>CONTACT</li>
          <li>FAQ</li>
          <li>SUSTAIBABILITY</li>
        </ul>
        <ul>
          <li>PRIVACY POLICY</li>
          <li>DISCLAIMER</li>
          <li>DOWNLOAD PROFILE</li>
        </ul>
      </div>
      <div className="menu-mobile-info">
        <small>Email: info@gmail.com.vn</small>
        <button>Security Hotline: (+84) 254 3526981 </button>
      </div>
    </div>
  );
};

export default Menu;
