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
  const [isShowHeader, setIsShowHeader] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleDropdownClick = (id) => {
    setActiveDropdown(id === activeDropdown ? null : id);
  };

  const handleScroll = () => {
    const currentPosition = window.pageYOffset;
    setScrollPosition(currentPosition);
  };

  useEffect(() => {
    // Thêm một bộ lắng nghe sự kiện cuộn trang khi component được mount
    window.addEventListener('scroll', handleScroll);
    // Loại bỏ bộ lắng nghe khi component bị hủy
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleToggleHeader = () => {
    setIsShowHeader(!isShowHeader);
    setIsHeaderVisible(true); // Đảm bảo header luôn hiển thị khi bạn ấn "Ẩn đi"
  };

  useEffect(() => {
    if (scrollPosition >= 150) {
      setIsHeaderVisible(true);
    } else if (!isShowHeader) {
      setIsHeaderVisible(false);
    }
  }, [scrollPosition, isShowHeader]);
  useEffect(() => {
      if(scrollPosition === 0) {
        setIsShowHeader(true)
        setIsHeaderVisible(true)
      }
  }, [scrollPosition])

  return (
    <div className="box">
      <Slide />
      {(scrollPosition >= 150) && 
        <button onClick={handleToggleHeader}
          className={`header__show ${isShowHeader ? '' : 'header__to-top'}`}><BsChevronDoubleDown size={20} color="#4CA757" /></button>}
     
      {isHeaderVisible && <div className={`header 
        ${isShowHeader ? "" : "header__hidden" } 
        ${(scrollPosition >= 150) ? 'header__down' : ''}`} ref={headerRef}>
          <div className="header__top">
            <img src={`${(scrollPosition >= 150) ? logoColor : logo}`} className="header__top-img" alt="" />
            <p className="header__top-number">+00 9875466</p>
          </div>
          <header>
            <nav>
              <ul className="menu">
                {pathsMain.map((item) => (
                  <li onClick={handleDropdownClick} 
                  onMouseEnter={() => item?.subNav ? headerRef.current.style.background = 'linear-gradient(180deg, #4CA757 0%, #16A571 100%)' : ''} key={item.id} 
                  onMouseLeave={() => item?.subNav ? (headerRef.current.style.background = '') : ''}
                  className="menu-item menu-item-text1">
                    <div className="menu-item-container">
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
