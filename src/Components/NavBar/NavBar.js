import React from 'react'
import "../CssGeneral.css";
import CartWidget from './CartWidget';
import logo from "../../../src/assets/img/logoEros.png"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="divNavbarLogo">
        <Link to= "/" ><img src={logo} alt='Logo' className='logo' /></Link>
      </div>
      
      <ul className="navbarList">
        <li className="navbarItem">
          <Link className='ancla' to="/" > Home </Link>
        </li>

        <li className="navbarItem">
          <Link className='ancla' to="/categoria/Remera" > Remeras </Link>
        </li>

        <li className="navbarItem">
          <Link className='ancla' to="/categoria/Medias" > Medias </Link>
        </li>

        <li className="navbarItem">
          <Link className='ancla' to="/categoria/Pantalon"> Pantalones </Link>
        </li>


        <Link to="/cart">

          <CartWidget />

        </Link>
      </ul>
    </nav>
  )
}

export default NavBar

