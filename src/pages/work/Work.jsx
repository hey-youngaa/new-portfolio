import React from 'react'
import Masonry,{ResponsiveMasonry} from 'react-responsive-masonry'
import './work.css'
import { projects } from '../../assets/data/Data'
import { blenderWork } from '../../assets/data/Data'
import { Link } from 'react-router-dom'

function Work() {
  return (
    <div className="pageContainer">
      <a href='https://elephantinthesnake.com/' rel='noreferrer' target='_blank' className='case-links'>
          <div className="work">
            <h1>
            <span className='caseNumber'> 01. </span>
            <span className='caseTitle'>June</span>
            </h1>
            <p className="tag">Website Design & Development</p>
          </div>
        </a>

        {projects.map((item) => {
          return(
            <Link to={`/${item.id}`} className={item.cName}>
              <div className="work">
                <h1>
                  <span className='caseNumber'> 0{item.number}.</span> 
                  <span className="workTitle"> {item.title}</span>
                </h1>
                <p className='tag'>{item.tags}</p>
              </div>
            </Link>
          )
        })}
        <br/>
        <ResponsiveMasonry columnsCountBreakPoints={{350:1, 750:2, 900:3}}>
          <Masonry gutter='2em'>
            {blenderWork.map((item) => {
              return(
                <img src={item.image} alt={item.alt} loading='lazy'/>
              )
            })}
          </Masonry>
        </ResponsiveMasonry>
    </div>
  )
}

export default Work