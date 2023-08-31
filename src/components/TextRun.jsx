import Marquee from "react-fast-marquee";
import React from 'react'

const TextRun = ({text}) => {
  return (
    <Marquee className="text-run" speed={200} direction="left">
        <div dangerouslySetInnerHTML={{__html: text}}></div>
  </Marquee>
  )
}

export default TextRun