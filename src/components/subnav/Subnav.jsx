import React, { useState } from 'react'
import subnav1 from 'assets/images/subnav.png'
import subnav2 from 'assets/images/clientPartnerImg.png'
import subnav3 from 'assets/images/about1.png'
import subnav4 from 'assets/images/about2.png'
import 'css/subnav.css'

const contentSubNav = [
    {
        id: 1,
        content: 'The Company comprises dynamic qualified personnel, experienced in the field of offshore transportation and installation',
        img: subnav1
    },
    {
        id: 2,
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
        img: subnav2
    },
    {
        id: 3,
        content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        img: subnav3
    },
    {
        id: 4,
        content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
        img: subnav4
    },
]

const SubNavHome = () => {
    const [content, setContent] = useState(contentSubNav[0]);

    return <div className='sub-menu'>
        <div className='subnav'>
        <ul className='subnav-right'>
            <li onMouseEnter={() => setContent(contentSubNav[0])}>Introduce</li>
            <li onMouseEnter={() => setContent(contentSubNav[1])}>Our People</li>
            <li onMouseEnter={() => setContent(contentSubNav[2])}>QHSE</li>
            <li onMouseEnter={() => setContent(contentSubNav[3])}>Asset And Facility</li>
        </ul>
        <div className='subnav-left'>
            <img src={content?.img} width={342} height={391} alt=''/>
            <div className='subnav-content'>
                <h1>Introduce</h1>
                <p>{content?.content}</p>
                <button>SEE MORE +</button>
            </div>
        </div>
        </div>
    </div>
}

export default SubNavHome