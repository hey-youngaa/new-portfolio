import React from 'react'
import './work.css'
import { Projects } from '../../assets/data/Data'
import { Blender } from '../../assets/data/Data'

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
      <h1>Blender Works</h1>
      <div className="blenderContainer">
        {Blender.map((item) => {
          return(
            <div className="renderWrapper">
              <img src={item.cover} alt='' />
              <video src={item.video} autoPlay loop/>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Work