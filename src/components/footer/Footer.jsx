import React from 'react'
import './footer.css'
import { footerItems } from '../../assets/data/Data'
import arrow from '../../assets/images/arrow-up-right.svg'

function Footer() {
  return (
    <div className='footerContainer'>
        <ul>
            {footerItems.map((item,index) => {
                return(
                    <li key={index} className='footerItem'>
                        <a target='_blank'rel='noreferrer' href={item.url} className={item.cName}>
                            <img src={item.image} alt={item.title} id='footerIcon' />
                            <span>{item.title}</span>
                            <img src={arrow} alt='external link arrow' className='linkArrow' />
                        </a>
                        <div id="whiteLine"></div> 
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Footer