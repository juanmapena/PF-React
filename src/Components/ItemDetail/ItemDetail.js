import React from 'react'

function ItemDetail({ item }) {
    return (
        <div className="product-card">
        <div className="product-image">
          <img src={item.imagen} alt="Producto" />
        </div>
        <div className="product-details">
        <h1 className='nombre'>{item.nombre}</h1>
                    <p className='descripcion'>{item.descripcion}</p>
                    <p className='precio'>{item.stock} disponibles</p>
                    <p className='precio'>{item.precio} $</p>
        </div>
      </div>

    )
}

export default ItemDetail