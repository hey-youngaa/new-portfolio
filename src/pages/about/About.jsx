import React from 'react'
import './about.css'
import me from '../../assets/images/me.jpg'
import catEye from '../../assets/images/catEye.svg'

function About() {
  return (
    <div className="aboutContainer">
      <div className="aboutSection">
        <div className="profileTextWrapper">
          <h1>Hi there!</h1>
          <p className='aboutText'>
            It's nice to meet you, I'm Jessica.<br/><br/>My curious nature led me to the digital world and 
            I've been enjoying the learning process behind UX/UI design and web development. I'm interested
            in creating impactful and intuitive experiences and am currently looking for opportunities to
            grow in the design field.
          </p>
        </div>
        <div className="profileImgWrapper">
          <img src={me} alt='profile' />
        </div>
      </div>
      <div className="marquee">
        <div className="marqueeContent scroll">
          <img src={catEye} alt='cateye' />
          <h2>
            UX Design &ensp; UI Design &ensp; Responsive Design &ensp; Wireframing &ensp; Mockups &ensp; Prototyping &ensp; 
            Web Development &ensp; ReactJS &ensp; 3D Design &ensp;
          </h2>
        </div>
        {/*second marquee content div to mirror */}
        <div className="marqueeContent scroll" aria-hidden="true">
          <img src={catEye} alt='cateye' />
          <h2>
            UX Design &ensp; UI Design &ensp; Responsive Design &ensp; Wireframing &ensp; Mockups &ensp; Prototyping &ensp; 
            Web Development &ensp; ReactJS &ensp; 3D Design &ensp;
          </h2>
        </div>
      </div>
    </div>
  )
}

export default About