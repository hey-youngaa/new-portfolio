import React from 'react'
import './navbar.css'
import {NavItems} from '../../assets/data/Data'
import { Link } from 'react-router-dom'
import cat from '../../assets/images/cat.svg'

function NavBar() {


  return (
    <nav className='navBarItems'>
        <div className="leftNav">
          <Link to="/" className='logo'>
            <img src={cat} alt=''/>
          </Link>
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