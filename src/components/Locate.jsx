import React, { useEffect, useState } from 'react'
import '../css/locate.css'
import serviceImg8 from '../assets/images/serviceImg8.png'
import CountUp from 'react-countup';

const Locate = () => {
  const [show, setShow] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
    
  useEffect(() => {
    const onScroll = () => {
      // Kiểm tra xem phần tử có trong tầm nhìn của trình duyệt hay không
      const element = document.getElementById('number-counter1');
      if (element) {
        const rect = element.getBoundingClientRect();
        const viewHeight = Math.max(
          document.documentElement.clientHeight || 0,
          window.innerHeight || 0
        );
        if (rect.top <= viewHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className='locate'>
        <div className='locate__group'>
            <div className='locate__select'>
                <p onClick={() => setShow(pre => !pre)}>China</p> 
                {show && <div>
                <div className='straggle'></div>
                    <ul className='locate__select-item'>
                        <li>Trung Quốc</li>
                        <li>Thái Lan</li>
                        <li>Việt Nam</li>
                    </ul>
                </div>}
            </div>
            <div className='locate__select'>Năm 2023</div>
        </div>
        <h1 id="number-counter1" className='locate__number'>
            {isVisible && (
                            <CountUp start={0} end={16} duration={2} delay={0.2}>
                            {({ countUpRef }) => (
                                <span ref={countUpRef} />
                            )}
                            </CountUp>
                        )}
            <div>
                <p className='locate__number-plus'>+</p>
                <p className='locate__number-type'>Projects</p>
            </div>
        </h1>
        <div className='locate__info'>
            <img src={serviceImg8} alt='img'/>
            <p>Tan Thuan 75 MW Offshore Windfarm cable laying project</p>
        </div>
        <p className='locate__name'>Ca Mau Project</p>
        <p className='locate__content'>OFFSHORE ENERGY INSTALLATION JSC (OEI) was awarded the order to repair 120kV submarine cable.</p>
        <p className='locate__button'>SEE ALL +</p>
        <div className='locate__map'>
            <div className='locate__circle'>
                <div className='locate__circle-small'></div>
            </div>
        </div>
    </div>
  )
}

export default Locate