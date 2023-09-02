import React from 'react'
import '../css/locate.css'

const Locate = () => {
  return (
    <div className='locate'>
        <div className='locate__group'>
            <div className='locate__select'>
                <p>China</p> 
                <ul className='locate__select-item'>
                    <li>Trung Quốc</li>
                    <li>Thái Lan</li>
                    <li>Việt Nam</li>
                </ul>
            </div>
            <div className='locate__select'>China</div>
        </div>
        <div className='locate__map'>
            <div className='locate__circle'>
                <div className='locate__circle-small'></div>
            </div>
        </div>
    </div>
  )
}

export default Locate