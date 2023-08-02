import React from 'react'
import './work.css'
import { Projects } from '../../assets/data/Data'

function Work() {
  return (
    <div className="workContainer">
      <div className="studiesContainer">
        {Projects.map((item) => {
          return(
            <a href={item.pdf} target='_blank' rel='noreferrer' >
              <div className="studyWrapper">
                <img src={item.cover} alt="" />
                <h1 className={item.cName}> {item.title} </h1>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default Work