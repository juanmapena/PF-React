import React from 'react'
import "../CssGeneral.css"
import imagen from "../../../src/assets/img/carrito-de-compras.png"


function CartWidget() {
  return (
    <div>
        <img src={imagen} alt='Carrito' className='imgCarrito'/>
        
    </div>
  )
}

export default CartWidget
