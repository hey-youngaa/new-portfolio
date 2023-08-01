import React, { useState } from 'react'
import './navbar.css'
import {NavItems} from '../../assets/data/Data'
import { Link } from 'react-router-dom'
import {CgMenu,CgClose} from 'react-icons/cg'

function NavBar() {
  const [showLinks, setShowLinks] = useState(false);


  return (
    <nav className='navBarItems'>
        <div className="leftNav">
          <Link to="/" className='logo'><h1>Jessica Choi</h1></Link>
        </div>
        
        <ul className='rightNav'>
            {NavItems.map((item,index) => {
                return(
                    <li key={index}>
                        <Link className={item.cName} to={item.url}>
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
      </nav>
  )
}

export default NavBar