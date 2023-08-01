import React from 'react'
import './hero.css'
import ocean from '../../assets/videos/ocean.mp4'

function Hero() {
  return (
    <div className="heroContainer">
        <video src={ocean} autoPlay loop />
    </div>
  )
}

export default Hero