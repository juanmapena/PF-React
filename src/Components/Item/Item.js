import React from 'react'
import {Link} from "react-router-dom"
import "../CssGeneral.css"

function Item({item}) {
  return (
    <Link className='ancla' to = {"/item/" + item.id}>
    <div className='card-container'>
        <div className='card'>

        <img className='imagen' src = {item.img} alt={item.title} />

    <div className='card-content'>
    <h1 className='nombre'>{item.title}</h1>


    </div>

    </div>
    </div>
    </Link>
  )
}

export default Item