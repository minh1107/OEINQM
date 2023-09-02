import React from 'react'
import '../css/clientAndPartner.css'
import clientParnerLogoImg1 from '../assets/images/clientPartnerImgLogo1.png'
import clientParnerLogoImg2 from '../assets/images/clientPartnerImgLogo2.png'
import clientParnerLogoImg3 from '../assets/images/clientPartnerImgLogo3.png'
import clientParnerLogoImg4 from '../assets/images/clientPartnerImgLogo4.png'
import clientParnerLogoImg5 from '../assets/images/clientPartnerImgLogo5.png'
import clientParnerLogoImg6 from '../assets/images/clientPartnerImgLogo6.png'


const ClientAndPartner = () => {
  return (
    <div className='client'>
        <div className='client__box'>
            <h4>our clients & partners</h4>
            <h1>
            “Our customers come from various industries, and we focus on meeting their needs and demands."
            </h1>
            <div className='client__img'>
                <img src={clientParnerLogoImg1} alt='logo'/>
                <img src={clientParnerLogoImg2} alt='logo'/>
                <img src={clientParnerLogoImg3} alt='logo'/>
                <img src={clientParnerLogoImg4} alt='logo'/>
                <img src={clientParnerLogoImg5} alt='logo'/>
                <img src={clientParnerLogoImg6} alt='logo'/>
            </div>
        </div>
    </div>
  )
}

export default ClientAndPartner