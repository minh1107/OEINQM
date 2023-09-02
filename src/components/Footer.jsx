import React from 'react'
import logo from "assets/images/logoFooter.png";
import 'css/footer.css'
import facebook from 'assets/images/facebook.svg'
import youtube from 'assets/images/youtube.svg'
import zalo from 'assets/images/zalo.svg'
import instagram from 'assets/images/instagram.svg'
import tiktok from 'assets/images/tiktok.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__top'>
          <div className='footer__top-start'>
            <div>
              <img src={logo} className="footer__logo" alt="" />
              <p className='footer__logo-des'>Offshore Energy Installation JSC</p>
            </div>
          </div>
          <ul className='footer__top-middle'>
            <li>ABOUT</li>
            <li>PROJECT</li>
            <li>CLIENT & PARTNER</li>
            <li>NEWS AND EVENT</li>
            <li>SUSTAINABILITY</li>
            <li>DOWNLOAD PROFILE COMPANY</li>
          </ul>
          <ul className='footer__top-end'>
            <li>CAREERS</li>
            <li>CONTACT</li>
            <li>BLOG</li>
            <li>FAQ</li>
            <li>DISCLAIMER</li>
            <li>PRIVACY POLICY</li>
          </ul>
          <div className='footer__info'>
            <h3>Sign up for email to receive the latest information</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Aliquam sed blandit rhoncus id dictum. </p>
            <input type='text' placeholder='Your email'/>
            <ul>
              <img src={facebook} alt=''/>
              <img src={youtube} alt=''/>
              <img src={zalo} alt=''/>
              <img src={instagram} alt=''/>
              <img src={tiktok} alt=''/>
            </ul>
          </div>
        </div>
        <div className='footer__middle'>
          <p>Address</p>
          <p>2nd floor, No.44, 30/4 Rd., Ward 9, Vung Tau City, Vietnam</p>
          <div style={{width: '20%'}}></div>
          <div style={{width: '20%'}}></div>
        </div>
        <div className='footer__bottom'>
          <p>Contact</p>
          <p>(+84) 254 6295268</p>
          <p>info@oei.com.vn</p>
          <div style={{width: '20%'}}></div>
        </div>
    </div>
  )
}

export default Footer