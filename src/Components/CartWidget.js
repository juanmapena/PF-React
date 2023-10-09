import React from 'react'
import "../Components/NavBar/NavBar"
import "./NavBar.css"


function CartWidget({imagen}) {
  return (
    <div>
        <img src={imagen} alt='Carrito' className='imgCarrito' />
    </div>
  )
}

export default CartWidget