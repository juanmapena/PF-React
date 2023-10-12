import React from 'react'
import "../NavBar.css";
import CartWidget from './CartWidget';
import logo from "../../../src/assets/img/logoEros.png"


function NavBar() {
  return (
    <nav className="navbar">
      <div className="divNavbarLogo">
        <img src={logo} alt='Logo' className='logo'/>
      </div>
      <ul className="navbarList">
        <li className="navbarItem">Remeras</li>
        <li className="navbarItem">Boxers</li>
        <li className="navbarItem">Pantalones</li>
        <CartWidget />
      </ul>
    </nav>
  )
}

export default NavBar

