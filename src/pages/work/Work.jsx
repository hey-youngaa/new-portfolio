import React from 'react'
import './work.css'
import { Projects } from '../../assets/data/Data'
import { Blender } from '../../assets/data/Data'
import { Link } from 'react-router-dom'
import ImgGallery from '../../components/imggallery/ImgGallery'

function Work() {
  return (
    <div className="pageContainer">
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
      
      <ImgGallery gallery={Blender} />
    </div>
  )
}

export default Work