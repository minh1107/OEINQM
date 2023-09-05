import React from 'react'
import '../css/service.css'
import serviceImg1 from '../assets/images/serviceImg1.png'
import serviceImg2 from '../assets/images/serviceImg2.png'
import serviceImg3 from '../assets/images/serviceImg3.png'
import serviceImg4 from '../assets/images/serviceImg4.png'
import serviceImg5 from '../assets/images/serviceImg5.png'
import serviceImg6 from '../assets/images/serviceImg6.png'
import serviceImg7 from '../assets/images/serviceImg7.png'
import serviceImg8 from 'assets/images/serviceImg8.png'
import textStraight from 'assets/images/textStraigh.svg'
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
  return (
    <div className='service'>
        <div className='service__top'>
          <div className='service__top-item'>
            <p>Our Comprehensive Service</p>
            <h1>Empowering Sustainability</h1>
          </div>
            <div className='service__top-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
            <div className='service__top-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
            <div className='service__top-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
        </div>
        <div className='service__bottom'>
          <div className='service__bottom-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
          <div className='service__bottom-box'>
            <div className='service__bottom-up'>
                <div className='service__bottom-up-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
                <div className='service__bottom-up-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
                <div className='service__bottom-up-item'></div>
                <div className='text__straight'></div>
            </div>
            <div className='service__bottom-down'>
                <div className='service__bottom-down-item'>
                  <p className='service__bottom-number'>10 <span><span>+</span></span></p>
                  <p className='service__bottom-text'>Engineers work in OEI</p>
                </div>
                <div src={serviceImg8} className='service__bottom-down-item scale__img'><span>+</span><p>Onshore Construction and Fabrication</p></div>
                <div className='service__bottom-down-item'>
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