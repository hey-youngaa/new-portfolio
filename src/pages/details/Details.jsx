import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../../assets/data/Data'
import OneCol from '../../components/onecol/OneCol'

function Details() {
    let {id} = useParams()
    let [study, setStudy] = useState(null)
    let [showTop, setShowTop] = useState(false)

    useEffect(() => {
        let study = projects.find((study) => study.id === id)
        if (study){
            setStudy(study)
        }
    },[id])
  
    // show "back up" button after scrolling
    useEffect(() => {
        const handleScroll = () => {
            setShowTop(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
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

        {showTop && (
            <button
                onClick={scrollToTop}
                style={{
                    position:'fixed',
                    bottom: '30px',
                    right: '20px',
                    height: '45px',
                    borderRadius: '50% 50% 55% 45% / 70% 70% 40% 45%',
                    cursor: 'pointer',
                    fontSize: '18px',
                    border: 'none',
                    backgroundColor: '#006a38',
                    color: 'white',
                    zIndex: '10'
                }}    
            >
                ↑
            </button>
        )}
    </div>
  )
}

export default Details