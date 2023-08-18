import React, {useState} from 'react'
import './navbar.css'
import {NavItems} from '../../assets/data/Data'
import { Link } from 'react-router-dom'
import cat from '../../assets/images/cat.svg'
import {CgMenu} from 'react-icons/cg'

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false)

  const handleShowNavBar = () => {
    setShowNavBar(!showNavBar)
  }

  return (
    <nav className='navBarItems'>
        <div className="leftNav">
          <Link to="/" className='logo'>
            <img src={cat} alt=''/>
          </Link>
        </div>
        <div className="menuIcon" onClick={handleShowNavBar}>
          <CgMenu />
        </div>

        <ul className={showNavBar ? 'rightNav active' : 'rightNav'}>
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