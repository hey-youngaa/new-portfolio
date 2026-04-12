import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
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
    <div style={{backgroundColor: '#f7f7f7', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px 0'}}>
        {study ? (
            <OneCol gallery={study.images} />
        ) : null}

        <Link to="/work" className='backBtn'
            style={{display: 'inline-block', backgroundColor: '#c4dd92', borderRadius: '40% 35% 55% 45% / 55% 55% 40% 45%'
                , padding: '12px 20px', textDecoration: 'none', fontWeight: 'bold', 
            }}
        >
            Back to Work
        </Link>
    </div>
  )
}

export default Details