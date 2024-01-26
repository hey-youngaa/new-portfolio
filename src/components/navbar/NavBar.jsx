import React, {useState} from 'react'
import './navbar.css'
import {NavItems} from '../../assets/data/Data'
import { NavLink } from 'react-router-dom'
import menu from '../../assets/images/menu.svg'

function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false)

  const handleShowNavBar = () => setShowNavBar(!showNavBar);

  const closeMobileMenu = () => setShowNavBar(false);

  return (
    <nav className='navBarContainer'>
      <NavLink to="/" className="logo" onClick={closeMobileMenu}>
        Jessica Choi
      </NavLink>
      <div className="menuIcon" onClick={handleShowNavBar}>
        <img src={menu} alt='menu bar' />
      </div>

      <div className={showNavBar ? 'navItems active' : 'navItems'} >
        {NavItems.map((item,index) => {
          return(
            <div key={index}>
              <NavLink className={item.cName} to={item.url} onClick={closeMobileMenu}>
              {item.title}
              </NavLink>
            </div>
          )
        })}
      </div>
    </nav>
  )
}

export default NavBar