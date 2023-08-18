import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import './details.css'
import { Projects } from '../../assets/data/Data'
import OneCol from '../../components/onecol/OneCol'

function Details() {
    let {id} = useParams()
    let [study, setStudy] = useState(null)

    useEffect(() => {
        let study = Projects.find((study) => study.id === id)
        if (study){
            setStudy(study)
        }
    },[id])
  

  return (
    <div className="detailsContainer">
        {study ? (
            <div className="caseStudy">
                <OneCol gallery={study.images} />
            </div>
        ) : null}
    </div>
  )
}

export default Details