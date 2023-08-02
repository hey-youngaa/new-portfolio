import React from 'react'
import './work.css'
import { Projects } from '../../assets/data/Data'

function Work() {
  return (
    <div className="workContainer">
      <div className="studiesContainer">
        {Projects.map((item) => {
          return(
            <div className="studyWrapper">
              <img src={item.cover} alt="" />
              <h2 className={item.cName}> {item.title} </h2>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work