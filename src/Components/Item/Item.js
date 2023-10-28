import React from 'react'
import {Link} from "react-router-dom"
import "../NavBar.css"

function Item({item}) {
  return (
    <Link className='ancla' to = {"/item/" + item.id}>
    <div className='card-container'>
        <div className='card'>

        <img className='imagen' src = {item.imagen} alt={item.nombre} />

    <div className='card-content'>
    <h1 className='nombre'>{item.nombre}</h1>


    </div>

        </div>
    </div>
    </Link>
  )
}

export default Item