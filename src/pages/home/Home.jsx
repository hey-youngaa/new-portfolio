import React from 'react'
import './home.css'

import { Link } from 'react-router-dom'
import homeCover from '../../assets/images/homeDecor.jpg'
import ht from '../../assets/images/ht.jpg'
import arrow from '../../assets/images/arrow-up-right.svg'

function Home() {
  return (
    <div className='homeContainer'>
      <p className='introText'>
        Hi! 👋 I'm Jessica, a UX/UI & Product Designer who combines data-driven thinking and empathy to create
        inuitive, user-centered experiences.
      </p>

      <h2>Featured Case Studies</h2>
      <div className="workSection">

        <div className="block">
          <img src={ht} alt=''  className='workCover'/>
          <div className="workDetails">
            <h3>Harris Teeter Mobile App Redesign</h3>
            <p>Improving how shoppers discover deals and navigate grocery shopping</p>
            <Link to={'/harris-teeter-redesign'} className='workLink'>
              <div className="workLinkBox">
                <img src={arrow} alt='link arrow' />
                <div className="workLinkText">View Project</div>
              </div>
            </Link>
          </div>
        </div>

        <div className="block">
          <img src={homeCover} alt=''  className='workCover'/>
          <div className="workDetails">
            <h3>The Cozy Space</h3>
            <p>App design and prototype for a home furniture & decor concept</p>
            <Link to={'/home-shopping-concept'} className='workLink'>
              <div className="workLinkBox">
                <img src={arrow} alt='link arrow' />
                <div className="workLinkText">View Project</div>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home