import React from 'react'

import './work.css'
import { projects } from '../../assets/data/Data'
import june from '../../assets/images/juneWork.jpeg'

import { Link } from 'react-router-dom'

function Work() {
  return (
    <div className="workContainer">
      <h1>Work</h1>

      <div className="caseStudies">
        {projects.map((item) => {
          return(
            <div className="caseStudy">
              <Link to={`/${item.id}`} className={item.cName}>
                <h2>
                  <span className="caseNumber"> 0{item.number}. </span>
                  <span className="caseTitle">{item.title}</span>
                </h2>
              </Link>
              <p className='tag'>{item.tags}</p>
            </div>
          )
        })}
      </div>

      <div className="creativeSection">
        <h2>Creative Explorations</h2>

          <div className="creativeItem">
            <div className="imageWrapper">
              <a href='https://elephantinthesnake.com/' target='_blank' rel='noreferrer'>
                <img src={june} alt='artist portfolio website i developed' />
              </a>
            </div>
            <p className="creativeTitle">Artist Portfolio Website</p>
            <p className='creativeDesc'>
              Designed and developed to showcase artist's creative work
            </p>
          </div>

{/* WILL FIGURE OUT HOW TO LAYOUT THIS SECTION LATER
        <ResponsiveMasonry columnsCountBreakPoints={{350:1, 750:2, 900:3}}>
          <Masonry gutter='12px'>
            
            <div className="creativeItem webDevItem">
              <img src={june}></img>
              <p>Web design and development artist portfolio</p>
              <p>Click <a href='https://elephantinthesnake.com/' rel='noreferrer' target='_blank'>here</a> to view</p>
            </div>  

            
            {blenderWork.map((item) => {
              return(
                <div className="creativeItem blenderItem">
                  <img src={item.image} alt={item.alt} loading='lazy'/>
                </div>
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
*/}
      </div>


    </div>
  )
}

export default Work