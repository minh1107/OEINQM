import React from 'react'
import '../css/service.css'
import serviceImg1 from '../assets/images/serviceImg1.png'
import serviceImg2 from '../assets/images/serviceImg2.png'
import serviceImg3 from '../assets/images/serviceImg3.png'
import serviceImg4 from '../assets/images/serviceImg4.png'
import serviceImg5 from '../assets/images/serviceImg5.png'
import serviceImg6 from '../assets/images/serviceImg6.png'
import serviceImg7 from '../assets/images/serviceImg7.png'
import serviceImg8 from '../assets/images/serviceImg8.png'

const Service = () => {
  return (
    <div className='service'>
        <div className='service__top'>
          <div className='service__top-item'>
            <p>Our Comprehensive Service</p>
            <h1>Empowering Sustainability</h1>
          </div>
            <img src={serviceImg1} alt='' className='service__top-item' />
            <img src={serviceImg2} alt='' className='service__top-item' />
            <img src={serviceImg3} alt='' className='service__top-item' />
        </div>
        <div className='service__bottom'>
          <div><img src={serviceImg4} alt='' className='service__bottom-item' /></div>
          <div className='service__bottom-box'>
            <div className='service__bottom-up'>
                <img src={serviceImg5} alt='' className='service__bottom-up-item' />
                <img src={serviceImg6} alt='' className='service__bottom-up-item' />
                <img src={serviceImg7} alt='' className='service__bottom-up-item' />
            </div>
            <div className='service__bottom-down'>
                <div className='service__bottom-down-item'></div>
                <img src={serviceImg8} alt='' className='service__bottom-down-item' />
                <div className='service__bottom-down-item'>
                  <p>SEE MORE</p>
                </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Service