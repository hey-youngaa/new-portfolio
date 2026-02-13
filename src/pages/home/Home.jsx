import React from 'react'
import './home.css'
import choco from '../../assets/images/choco.png'
import june from '../../assets/images/juneWork.jpeg'
import { Link } from 'react-router-dom'
import homeCover from '../../assets/images/homeDecor.jpg'
import ht from '../../assets/images/ht.jpg'
import arrow from '../../assets/images/arrow-up-right.svg'

function Home() {
  return (
    <div className='homeContainer'>
      <div className="introText">
        <span>Self taught</span> UX/UI designer and web developer. Born and raised in the Maryland suburbs.
        Cat lover <img src={choco} alt='cat'/> and nature documentaries enthusiast
      </div>

      <h2>Recent Works</h2>
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
          <img src={june} alt="" className='workCover'/>
          <div className="workDetails">
            <h3>JUNE</h3>
            <p>Portfolio design and development for the Providence-based artist</p>
            <a href='https://elephantinthesnake.com/' rel='noreferrer' target='_blank' className='workLink'>
              <div className="workLinkBox">
                <img src={arrow} alt='link arrow' />
                <div className="workLinkText">View Website</div>
              </div>
            </a>
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