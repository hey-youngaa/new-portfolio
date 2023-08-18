import React from 'react'
import './work.css'
import { Projects } from '../../assets/data/Data'
import { Blender } from '../../assets/data/Data'
import { Link } from 'react-router-dom'

function Work() {
  return (
    <div className="workContainer">
      <div className="studiesContainer">
        {Projects.map((item) => {
          return(
            <Link to={`/work/${item.id}`} className='caseLink'>
              <div className="studyWrapper">
                <img src={item.cover} alt="" />
                <h2 className={item.cName}> {item.title} </h2>
              </div>
            </Link>
          )
        })}
      </div>
     
      <div className="blenderContainer">
        {Blender.map((item) => {
          return(
            <div className="renderWrapper">
              <img src={item.cover} alt='' />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work