import React from 'react'
import {useCartContext} from "../Context/CartContext"

function ItemCart({product}) {
    const {removerProducto} = useCartContext()
  return (
    <div>
        <img className='imagen2' src= {product.img} alt={product.title}/>
    <div>
    <p>{product.title}</p>
    <p>Cantidad:  {product.quantity}</p>
    <p>Precio por Unidad:  {product.price}</p>
    <button className='boton4' onClick={()=> removerProducto (product.id)}>Eliminar producto</button>

    </div>

    </div>
  )
}

export default ItemCart