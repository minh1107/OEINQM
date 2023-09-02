import React, { useState } from 'react'
import '../css/member.css'
import icons from 'util/icons'

const { AiOutlineRight, AiOutlineLeft } = icons
const Member = () => {
    const [isButtonActive, setIsButtonActive] = useState(false)
    const [isShow, setIsShow] = useState(1)

    const handleChangeMember = (number) => {
        setIsShow(number)

    }
    const handleChangeMemberLeft = () => {
        setIsButtonActive(true)
        if(isShow === 1) {
            setIsShow(3)
        } else setIsShow(pre => pre - 1)
    }
    const handleChangeMemberRight = () => {
        setIsButtonActive(false)
        if(isShow === 3) {
            setIsShow(1)
        } else setIsShow(pre => pre + 1)
    }

  return (
    <div className='member'>
        <div className='member__top'>
            <div className='member__top-left'>
                <p>We are</p>
                <h1>A Member Of</h1>
                <p>A business development organization helping to make valuate connection between business in the global energy sector.</p>
                <div className='button-group'>
                    <button onClick={() => handleChangeMemberLeft()} className={`button ${isButtonActive && 'button-active'}`}>
                        <AiOutlineLeft size={20} color={isButtonActive ? '#4CA757' : 'white'}/>
                    </button>
                    <button onClick={() => handleChangeMemberRight()} className={`button ${!isButtonActive && 'button-active'}`}>
                        <AiOutlineRight size={20} color={!isButtonActive ? '#4CA757' : 'white'}/>
                    </button>
                </div>
            </div>
            <div className='member__top-right'>
                <div onClick={() => handleChangeMember(1)} 
                     className={`member__top-right-item ${isShow === 1 ? 'member__img-active1' : 'member__img-nonactive1'}`}></div>        
                <div onClick={() => handleChangeMember(2)} 
                     className={`member__top-right-item ${isShow === 2 ? 'member__img-active2' : 'member__img-nonactive2'}`}></div>        
                <div onClick={() => handleChangeMember(3)} 
                     className={`member__top-right-item ${isShow === 3 ? 'member__img-active3' : 'member__img-nonactive3'}`}></div>        
            </div>
        </div>
        <div className='member__bottom'>
            <h1>Company value reflect its ability to generate future profits, management and market position.</h1>
            <div className='member__bottom-archive'>
                <div className='member__bottom-archive-item'>
                    <h1>2 <div>+</div></h1>
                    <p>Founded year</p>
                </div>
                <div className='member__bottom-archive-item'>
                    <h1>20 <div>+</div></h1>
                    <p>Personal</p>
                </div>
                <div className='member__bottom-archive-item'>
                    <h1>14 <div>+</div></h1>
                    <p>Project</p>
                </div>
                <div className='member__bottom-archive-item'>
                    <h1>20 <div>+</div></h1>
                    <p>Client & Partners</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Member