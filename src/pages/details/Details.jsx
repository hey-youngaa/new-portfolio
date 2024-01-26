import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { projects } from '../../assets/data/Data'
import OneCol from '../../components/onecol/OneCol'

function Details() {
    let {id} = useParams()
    let [study, setStudy] = useState(null)

    useEffect(() => {
        let study = projects.find((study) => study.id === id)
        if (study){
            setStudy(study)
        }
    },[id])
  

  return (
    <div>
        {study ? (
            <OneCol gallery={study.images} />
        ) : null}
    </div>
  )
}

export default Details