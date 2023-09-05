import React, { useEffect, useRef, useState } from 'react'
import '../css/lastNews.css'
import icons from 'util/icons'
import { latestNews } from 'util'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { AiOutlineRight, AiOutlineLeft } = icons
const settings = {
  infinite: true,
  dots: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerPadding: "20px",
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};
const LastNews = () => {
  const sliderRef = useRef(null);
  const [isButtonActive, setIsButtonActive] = useState(false)
  const [isShow, setIsShow] = useState(1)
  const slideIndex = useRef()

  const handleChangeMemberLeft = () => {
      setIsButtonActive(true)
      if(isShow === 1) {
          setIsShow(latestNews.length)
      } else setIsShow(pre => pre - 1)
      sliderRef.current.slickPrev();
    }
  const handleChangeMemberRight = () => {
      setIsButtonActive(false)
      if(isShow === latestNews.length) {
          setIsShow(1)
      } else setIsShow(pre => pre + 1)
      sliderRef.current.slickNext();
    }
  
  useEffect(() => {    
    slideIndex.current.style.width = `${isShow*10}%`
    return () => {
    }
  }, [isShow])
  

  useEffect(() => {
    const firstItem = sliderRef.current.innerSlider.$list?.find('.custom-slide').first();
    if (firstItem) {
      firstItem.css('background-color', 'red');
    }
  }, []);
  return (
    <div className='news'>
        <div className='news__title'>
            <div className='news__title-left'>
                <p>News</p>
                <h1 className='wave-text'>Lastest News</h1>
            </div>
            <button className='news__title-right'>SEE MORE</button>
            <button className='news__title-right-mobile'>See All +</button>
        </div>
        <Slider {...settings} ref={sliderRef}>
            {latestNews.map((item, index) => (
              <div>
                <div key={item.id} className={`news__feed-item`}>
                  <img className='news__feed-img' src={item.img} alt=''/>
                  <p className='news__feed-time'>{item.dateTime}</p>
                  <p className='news__feed-content'>{item.content}</p>
                  <div className='news__feed-button'>SEE MORE +</div>
                </div></div>
            ))}
        </Slider>
        <div className='news__button'>
            <div className='button-group'>
                <button onClick={() => handleChangeMemberLeft()} className={`button ${isButtonActive && 'button-active button-green'}`}>
                    <AiOutlineLeft size={20} color={isButtonActive ? 'white' : '#4CA757'}/>
                </button>
                <button onClick={() => handleChangeMemberRight()} className={`button ${!isButtonActive && 'button-active button-green'}`}>
                    <AiOutlineRight size={20} color={!isButtonActive ? 'white' : '#4CA757'}/>
                </button>
            </div>
          <div ref={slideIndex} className='line-green'></div>
        </div>
    </div>
  )
}

export default LastNews