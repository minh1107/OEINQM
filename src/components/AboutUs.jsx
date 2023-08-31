import React from 'react'
import '../css/common.css'
import '../css/about.css'

const AboutUs = () => {
  return (
    <div className='about'>
        <div>
            <h3 className='about__title'>About us</h3>
            <h1 className='about__content'>
                <span className='text-blue'>Offshore Energy Installation</span>  
                OEI is your gateway to renewable energy and 
                <span className='text-blue'>Oil</span> & <span className='text-blue'>Gas</span> solutions. 
            </h1>
            <button className='about__button'>See more</button>
        </div>
        <div className='about__right'>
            <div className='about__right-item-1'></div>
            <div className='about__right-item-2'></div>
            <div className='about__right-item-3'></div>
            <div className='about__right-item-4'></div>
            <div className='about__right-item-5'></div>
            <div className='about__right-item-6'></div>
            <div className='about__right-item-7'></div>
        </div>
    </div>
  )
}

export default AboutUs