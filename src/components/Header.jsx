import React, { useEffect, useRef, useState } from "react";
import logo from "assets/images/logo.png";
import { pathsMain } from "util";
import 'css/header.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slide from "./Slide";
import icons from "util/icons";
import logoColor from 'assets/images/logoColor.png'

const { BsChevronDoubleDown } = icons;

const Header = () => {
  const headerRef = useRef()
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showHeader, setShowHeader] = useState(true)

  const handleDropdownClick = (id) => {
    setActiveDropdown(id === activeDropdown ? null : id);
  };

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
    if(currentPosition < 150) setShowHeader(true)
  };
  console.log(scrollPosition)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleHeader = () => {
    setShowHeader(pre => !pre)
  };

  return (
    <div className="box">
      <Slide />
      {(scrollPosition >= 150) && 
        <button onClick={handleToggleHeader}
          className={`header__show ${showHeader ? 'header__to-top' : ''}`}><BsChevronDoubleDown size={20} color="#4CA757" /></button>}
      {<div className={`header
      ${(scrollPosition >= 150 && showHeader) ? 'height__change-reverse' : ''}
      ${scrollPosition >= 150 ? 'header__down' : ''}
        `} ref={headerRef}>
          <div className="header__top">
            <img src={`${(scrollPosition >= 150) ? logoColor : logo}`} className="header__top-img" alt="" />
            <p className="header__top-number">+00 9875466</p>
          </div>
          <header>
            <nav>
              <ul className="menu">
                {pathsMain.map((item) => (
                  <li onClick={handleDropdownClick} 
                  onMouseEnter={() => item?.subNav ? (headerRef.current.style.background = 'linear-gradient(180deg, #4CA757 0%, #16A571 100%)') : ''} key={item.id} 
                  onMouseLeave={() => item?.subNav ? (headerRef.current.style.background = '') : ''}
                  className="menu-item ">
                    <div className="menu-item-container menu-item-text1">
                      <span className="menu-item-text">{item.value}</span>
                      {item.icon && <item.icon />}
                    </div>
                    {item?.subNav && item.subNav}
                  </li>
                ))}
              </ul>
            </nav>
          </header>
        </div>}
    </div>
  );
};

export default Header;
