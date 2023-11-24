import React, {useState} from 'react';
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Context/CartContext';


function ItemDetail({ item}) {
  
  const[goToCart, setGoToCart] = useState(false);
  const {agregarProducto} = useCartContext()
  const onAdd = (quantity) =>{
   setGoToCart(true);
   agregarProducto(item, quantity);
  
  }


    return (
        <div className="product-card">
        <div className="product-image">
          <img src={item.img} alt="Producto" />
        </div>
        <div className="product-details">
        <h1 className='nombre'>{item.title}</h1>
                    <p className='descripcion'>{item.description}</p>
                    <p className='precio'>{item.stock} disponibles</p>
                    <p className='precio'>{item.price} $</p>
        </div>
        <div>
        {goToCart ? <Link to='/cart' className='boton3'>Terminar compra</Link> :<ItemCount stock={item.stock} inicial={0} onAdd={onAdd} product={item} />}
        </div>
      </div>

    )
}

export default ItemDetail