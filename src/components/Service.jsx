import React, { useEffect, useRef, useState } from 'react'
import '../css/service.css'
import Slider from 'react-slick'

const settings = {
  infinite: true,
  dots: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "20px",
  initialSlide: 0}

const Service = () => {
  const imgRef = useRef([])
  const [scrollPositions, setScrollPositions] = useState([{
    id: 1,
    location: 0
  }])


  const handleScroll = () => {
    const newScrollPositions = imgRef.current.map((item, index) => {
      const { top } = item.getBoundingClientRect();
      if(index < 5)
      return {
        id: index,
        location: top - 500 >= 0 ? 500 - top  : 0
      }; else {
        return {
          id: index,
          location: top - 500 >= 0 ? top - 500  : 0
        };
      }
    });

    setScrollPositions(newScrollPositions);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll()
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div className='service'>
        <div className='service__top'>
          <div style={{
            transform: `translateX(${scrollPositions[0]?.location}px)`,
            transition: 'transform 0.6s ease-in-out',
          }} className='service__top-item' ref={(e) => imgRef.current[0] = e}>
            <p>Our Comprehensive Service</p>
            <h1>Empowering Sustainability</h1>
          </div>
            <div style={{
            transform: `translateX(${scrollPositions[1]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[1] = e} className='service__top-item scale__img' ><span>+</span><p>Onshore Construction and Fabrication</p></div>
            <div style={{
            transform: `translateX(${scrollPositions[7]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[7] = e} className='service__top-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
            <div style={{
            transform: `translateX(${scrollPositions[8]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[8] = e} className='service__top-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
        </div>
        <div className='service__bottom'>
          <div style={{
            transform: `translateX(${scrollPositions[2]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[2] = e} className='service__bottom-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
          <div className='service__bottom-box'>
            <div className='service__bottom-up'>
                <div style={{
            transform: `translateX(${scrollPositions[3]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[3] = e} className='service__bottom-up-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
                <div style={{
            transform: `translateX(${scrollPositions[9]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[9] = e} className='service__bottom-up-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
                <div style={{
            transform: `translateX(${scrollPositions[10]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[10] = e} className='service__bottom-up-item'></div>
                <div  style={{
            transform: `translateX(${scrollPositions[11]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[11] = e} className='text__straight'></div>
            </div>
            <div className='service__bottom-down'>
                <div style={{
            transform: `translateX(${scrollPositions[4]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[4] = e} className='service__bottom-down-item'>
                  <p className='service__bottom-number'>10 <span><span>+</span></span></p>
                  <p className='service__bottom-text'>Engineers work in OEI</p>
                </div>
                <div style={{
            transform: `translateX(${scrollPositions[5]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[5] = e} className='service__bottom-down-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
                <div style={{
            transform: `translateX(${scrollPositions[6]?.location}px)`,
            transition: 'transform 0.3s ease-in-out',
          }} ref={(e) => imgRef.current[6] = e} className='service__bottom-down-item'>
                  <p>SEE MORE</p>
                </div>
            </div>
          </div>
        </div>
        <div className='service__mobile'>
        <div className='service__top-item'>
            <p>we provide service</p>
            <h1>Empowering Sustainability</h1>
          </div>
        <Slider {...settings}>
          <div className='service__img-mobile1 service__img-mobile'><span>+</span><p>Project Management, Engineering and Construction </p></div>
          <div className='service__img-mobile2 service__img-mobile'><span>+</span><p>Project Management, Engineering and Construction </p></div>
          <div className='service__img-mobile3 service__img-mobile'><span>+</span><p>Project Management, Engineering and Construction </p></div>
          <div className='service__img-mobile4 service__img-mobile'><span>+</span><p>Project Management, Engineering and Construction </p></div>
          <div className='service__img-mobile5 service__img-mobile'><span>+</span><p>Project Management, Engineering and Construction </p></div>
          <div className='service__img-mobile6 service__img-mobile'><span>+</span><p>Project Management, Engineering and Construction </p></div>
          <div className='service__img-mobile7 service__img-mobile'><span>+</span><p>Project Management, Engineering and Construction </p></div>
        </Slider>
        </div>
    </div>
  )
}

export default Service