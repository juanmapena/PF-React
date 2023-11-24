import React, { useState,useEffect } from "react";

const ItemCount = ({inicial,stock,onAdd}) => {
    const [count, setCount] = useState(parseInt(inicial));

    const incrementar=()=>{
        setCount( count + 1)

   }

   const decrementar=()=>{
    setCount( count - 1)

}

useEffect(() => {
    setCount(parseInt(inicial));
}, [inicial]);
    


    return (
        <div className="divBotonCarrito">
            <button disabled={count <= 1} onClick={decrementar} className="botonDecremento">
                -
            </button>
            <span>{count}</span>
            <button  disabled={count >= stock} onClick={incrementar} className="botonIncremento">
                +
            </button>

            <div>
                <button disabled={stock <= 0} onClick={() => onAdd(count)} className="boton1">
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default ItemCount;