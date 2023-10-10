import React from 'react'
import "../NavBar.css"
import imagen from "../../../src/assets/img/carrito-de-compras.png"


function CartWidget() {
  return (
    <div>
        <img src={imagen} alt='Carrito' className='imgCarrito'/>
        <span className='spanStyle'>(5)</span>
        
    </div>
  )
}

export default CartWidget
