import React from 'react'
import './hero.css'
import ocean from '../../assets/videos/ocean.mp4'
import { SocialIcons } from '../../assets/data/Data'


function Hero() {
  return (
    <div className="heroContainer">
        <video src={ocean} muted autoPlay loop />
       <div className="heroContext">
        <h1>jessica choi</h1>
          <ul className='socials'>
              {SocialIcons.map((item,index) => {
                  return(
                      <li key={index}>
                          <a target='_blank'rel='noreferrer' href={item.url} className={item.cName}>
                            <img src={item.image} alt="" />
                          </a>
                      </li> 
                  )
              })}
          </ul>
       </div>
    </div>
  )
}

export default Hero