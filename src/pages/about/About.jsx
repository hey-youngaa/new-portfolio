import React from 'react'
import './about.css'
import me from '../../assets/images/me.jpg'

function About() {
  return (
    <div className="aboutContainer">
      <div className="profileInfo">
        <div className="profileTextWrapper">
          <h1>Hi there!</h1>
          <p>
            Nature documentaries enthusiast and bread lover
          </p>
        </div>
        <div className="profileImgWrapper">
          <img src={me} alt='profile' />
        </div>
      </div>
    </div>
  )
}

export default About