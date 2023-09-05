import React, { useEffect, useState } from 'react'
import '../css/member.css'
import icons from 'util/icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';


const { AiOutlineRight, AiOutlineLeft } = icons
const Member = () => {
    const [isButtonActive, setIsButtonActive] = useState(false)
    const [isShow, setIsShow] = useState(1)
    const [isHoverButtonLeft, setIsHoverButtonLeft] = useState(false);
    const [isHoverButtonRight, setIsHoverButtonRight] = useState(false);
    const [buttonClickLeft, setButtonClickLeft] = useState(false)
    const [buttonClickRight, setButtonClickRight] = useState(false)
    const [isVisible, setIsVisible] = useState(false);

    const handleChangeMember = (number) => {
        setIsShow(number)
    }
    const handleChangeMemberLeft = () => {
        setIsButtonActive(true)
        setButtonClickLeft(pre => !pre)
        if(isShow === 1) {
            setIsShow(3)
        } else setIsShow(pre => pre - 1)
    }
    const handleChangeMemberRight = () => {
        setIsButtonActive(false)
        setButtonClickRight(pre => !pre)
        if(isShow === 3) {
            setIsShow(1)
        } else setIsShow(pre => pre + 1)
    }
    useEffect(() => {
        AOS.init();
      }, []);


  useEffect(() => {
    const onScroll = () => {
      // Kiểm tra xem phần tử có trong tầm nhìn của trình duyệt hay không
      const element = document.getElementById('number-counter');
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
    <div className='member'>
        <div className='member__top'>
            <div className='member__top-left'>
                <p>We are</p>
                <h1 className='letter'>
                    <span data-aos='fade-up' data-aos-delay="100">A</span> 
                    {" "}
                    <span data-aos='fade-down' data-aos-delay="200">M</span> 
                    <span data-aos='fade-up' data-aos-delay="300">e</span> 
                    <span data-aos='fade-up' data-aos-delay="400">m</span> 
                    <span data-aos='fade-up' data-aos-delay="500">b</span> 
                    <span data-aos='fade-up' data-aos-delay="600">e</span> 
                    <span data-aos='fade-up' data-aos-delay="700">r</span> 
                    {" "}
                    <span data-aos='fade-up' data-aos-delay="800">o</span> 
                    <span data-aos='fade-up' data-aos-delay="900">f</span> 
                </h1>
                {isShow === 1 && <p>A business development organization helping to make valuate connection between business in the global energy sector.</p>}
                {isShow === 2 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, aperiam laboriosam eveniet corrupti ut reiciendis</p>}
                {isShow === 3 && <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sed tempora eos voluptatem corrupti repellat?</p>}
                <div className='button-group'>
                    <button onMouseEnter={() => setIsHoverButtonLeft(true)} 
                            onMouseLeave={() => setIsHoverButtonLeft(false)}
                            onClick={() => handleChangeMemberLeft()} 
                            className={`button ${buttonClickLeft ? 'scale-button' : 'scale-button-reverse'} 
                            ${isHoverButtonLeft ? 'button-hover' : ''}`}>
                        <AiOutlineLeft size={20} color={`${isHoverButtonLeft ? '#16A571' : 'white'}`}/>
                    </button>
                    <button onMouseEnter={() => setIsHoverButtonRight(true)} 
                            onMouseLeave={() => setIsHoverButtonRight(false)}
                            onClick={() => handleChangeMemberRight()} className={`button ${buttonClickRight ? 'scale-button' : 'scale-button-reverse'}
                            ${isHoverButtonRight ? 'button-hover' : ''}`}>
                        <AiOutlineRight size={20} color={`${isHoverButtonRight ? '#16A571' : 'white'}`}/>
                    </button>
                </div>
            </div>
            <div className='member__top-right'>
                <div onMouseEnter={() => handleChangeMember(1)} 
                     className={`member__top-right-item ${isShow === 1 ? 'member__img-active1 scale-in-center' : 'member__img-nonactive1 scale-in-center-reverse'}`}></div>        
                <div onMouseEnter={() => handleChangeMember(2)} 
                     className={`member__top-right-item ${isShow === 2 ? 'member__img-active2 scale-in-center' : 'member__img-nonactive2 scale-in-center-reverse'}`}></div>        
                <div onMouseEnter={() => handleChangeMember(3)} 
                     className={`member__top-right-item ${isShow === 3 ? 'member__img-active3 scale-in-center' : 'member__img-nonactive3 scale-in-center-reverse'}`}></div>        
            </div>
        </div>
        <div className='member__bottom'>
            <h1>Company value reflect its ability to generate future profits, management and market position.</h1>
            <div className='member__bottom-archive' id='member__bottom-archive-mobile'>
                <div className='member__bottom-archive-item'>
                    <h1>
                        <div id="number-counter">
                        {isVisible && (
                            <CountUp start={0} end={2} duration={2} delay={0.2}>
                            {({ countUpRef }) => (
                                <div className='member__button-number'>
                                <span className='member__bottom-countUp' ref={countUpRef} />
                                <div className='member__bottom-plus'>+</div>
                                </div>
                            )}
                            </CountUp>
                        )}
                        <p className='member__bottom-info-number'>Founded year</p>
                    </div></h1>
                </div>
                <div className='member__bottom-archive-item'>
                <h1>
                    <div id="number-counter">
                        {isVisible && (
                            <CountUp start={0} end={20} duration={2} delay={0.2}>
                            {({ countUpRef }) => (
                                <div className='member__button-number'>
                                <span className='member__bottom-countUp' ref={countUpRef} />
                                <div className='member__bottom-plus'>+</div>
                                </div>
                            )}
                            </CountUp>
                        )}
                        <p className='member__bottom-info-number'>Personnel</p>
                    </div></h1>
                </div>
                <div className='member__bottom-archive-item'>
                <h1>
                    <div id="number-counter">
                        {isVisible && (
                            <CountUp start={0} end={14} duration={2} delay={0.2}>
                            {({ countUpRef }) => (
                                <div className='member__button-number'>
                                <span className='member__bottom-countUp' ref={countUpRef} />
                                <div className='member__bottom-plus'>+</div>
                                </div>
                            )}
                            </CountUp>
                        )}
                        <p className='member__bottom-info-number'>Projects</p>
                    </div></h1>
                </div>
                <div className='member__bottom-archive-item'>
                <h1>
                    <div id="number-counter">
                        {isVisible && (
                            <CountUp start={0} end={20} duration={2} delay={0.2}>
                            {({ countUpRef }) => (
                                <div className='member__button-number'>
                                <span className='member__bottom-countUp' ref={countUpRef} />
                                <div className='member__bottom-plus'>+</div>
                                </div>
                            )}
                            </CountUp>
                        )}
                        <p className='member__bottom-info-number'>Clinets & Partners</p>
                    </div></h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member