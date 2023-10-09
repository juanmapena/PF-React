import React from 'react'
import "../NavBar.css";
import CartWidget from '../CartWidget';




function NavBar({logo,item, item2,item3}) {
  return (
    <nav className="navbar">
      <div className="navbarLogo">{logo}</div>
      <ul className="navbarList">
        <li className="navbarItem">{item}</li>
        <li className="navbarItem">{item2}</li>
        <li className="navbarItem">{item3}</li>
        <CartWidget imagen = {"imagen"}/>
      </ul>
    </nav>
  )
}

export default NavBar

