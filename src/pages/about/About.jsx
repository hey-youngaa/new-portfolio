import React from 'react'
import './about.css'
import me from '../../assets/images/me.JPG'
import catEye from '../../assets/images/catEye.svg'
import choco from '../../assets/images/choco.png'
import cat from '../../assets/images/cat.png'

function About() {
  return (
    <div className="aboutContainer">
      <h1>About Me</h1>

      <div className="aboutSection">
        <div className="profileTextWrapper">
          <h2>Hi there!</h2>
          <div className="aboutText">
            <p>
              It's nice to meet you, I'm Jessica. <br/>
              I'm a UX/UI designer and web developer, born and raised in the Maryland suburbs.
              I'm a cat mom of two <img src={choco} alt='my oldest cat, Choco'/> <img src={cat} alt='my youngest cat, Siroo' />
              a nature documentaries enthusiast, and I enjoy spending time outdoors. I'm naturally curious about how people
              interact with the world around them, which often carries into how I approach design.
            </p>
            <p>
              My background in biology sparked my interst in understanding and translating data into meaningful insights. And 
              through my experience in hospitality and retail, I've developed a strong sense of empathy for users and appreciation
              for creating seamless, intuitive experiences.
            </p>
            <p>
              Today, I focus on designing thoughtful, user-centered solutions that balance clarity, usability, and visual design.
            </p>
          </div>
        </div>

        <div className="profileImgWrapper">
          <img src={me} alt='profile' />
        </div>
      </div>

      <div className="marquee">
        <div className="marqueeContent scroll">
          <img src={catEye} alt='cateye' />
          <h2>
            UX Design &ensp; UI Design &ensp; Responsive Design &ensp; Wireframing &ensp; Mockups &ensp; Prototyping &ensp; ReactJS &ensp; 
            Adobe Suite &ensp; JavaScript &ensp; HTML &ensp; CSS &ensp; SQL &ensp; 3D Design &ensp;
          </h2>
        </div>
        {/*second marquee content div to mirror */}
        <div className="marqueeContent scroll" aria-hidden="true">
          <img src={catEye} alt='cateye' />
          <h2>
            UX Design &ensp; UI Design &ensp; Responsive Design &ensp; Wireframing &ensp; Mockups &ensp; Prototyping &ensp; ReactJS &ensp; 
            Adobe Suite &ensp; JavaScript &ensp; HTML &ensp; CSS &ensp; SQL &ensp; 3D Design &ensp;
          </h2>
        </div>
      </div>

    </div>
  )
}

export default About