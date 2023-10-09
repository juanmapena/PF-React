import React from 'react'
import "./ItemListContainer.css"

function ItemListContainer({h1, parrafo}) {
  return (
    <div>
        <h1 className='tituloItem'> {h1}
          <p>{parrafo}</p>
        </h1>
    </div>
  )
}

export default ItemListContainer
