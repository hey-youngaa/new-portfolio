import React from 'react'
import './about.css'
import me from '../../assets/images/me.jpg'
import resume from '../../assets/documents/resume.pdf'

function About() {
  return (
    <div className="aboutContainer">
      <div className="profileInfo">
        <div className="profileTextWrapper">
          <h1>Hi there!</h1>
          <p>
            Currently I'm learning how to code and design to become a UX/UI designer,
            and you're looking at my very first website that I coded with React JSX. 
            <br />
            <br />
            Some fun facts about me, I'm an amateuar photographer, nature documentaries
            enthusiast and bread lover.
            <br />
            <br />
            <p>Click <a href={resume} target='_blank' rel='noreferrer'>here</a> for my resume</p>
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