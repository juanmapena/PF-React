import React from "react";
import {Link} from "react-router-dom"
import {useCartContext} from "../Context/CartContext"
import ItemCart from "../ItemCart/ItemCart";


function Cart() {

    const {cart, precioTotal} = useCartContext ();

    if (cart.length === 0){
        return (
            <>
            <p>No hay productos en el carrito</p>
            <Link className="anclaCompra" to= "/">Clickeá aquí y Realizá una compra</Link>
            </>
        );
    }


  return (
    <>
    {cart.map((product) => (
        <ItemCart key={product.id} product= {product}/>
    ))}
    
    <p> Precio Total: $ {precioTotal ()}</p>
    
    <Link to= "/checkout">
    {" "}
    <button className="boton1">Finalizar Compra</button>
    </Link>
    </>
  );
};


export default Cart