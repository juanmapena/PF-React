import { useState } from 'react';
import { useCartContext } from '../Context/CartContext';
import { Link } from 'react-router-dom';
import {getFirestore,collection, addDoc,updateDoc,doc,getDoc,} from 'firebase/firestore';



export const Checkout = () => {
  const [error, setError] = useState('');
  const [ordenId, setOrdenId] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [emailDeConfirmacion, setEmailDeConfirmacion] = useState('');


  const { cart, removerProducto, precioTotal } = useCartContext();

  const manejadorFormulario = (evento) => {
    evento.preventDefault();

    if (!nombre || !apellido || !telefono || !email || !emailDeConfirmacion) {
      setError("Rellene todos los campos.");
      return;
    }

    if (email !== emailDeConfirmacion) {
      setError("Los campos de email no son idénticos.");
      return;
    }
    const total = precioTotal();
    const orden = {
      items: cart.map((producto) => ({
        id: producto.id,
        nombre: producto.title,
        cantidad: producto.quantity,
      })),
      total: total,
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const db = getFirestore();
        const productoRef = doc(db, 'products', productoOrden.id);

        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        const db = getFirestore();
        addDoc(collection(db, 'orders'), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            removerProducto();
          })
          .catch((error) => {
            console.log('Existe un error en la creación de la orden', error);
            setError('Error en la orden');
          });
      })
      .catch((error) => {
        console.log('No se puede actualizar el stock', error);
        setError('No se actualizó el stock');
      });

    setNombre('');
    setApellido('');
    setTelefono('');
    setEmail('');
    setEmailDeConfirmacion('');
  };

  return (
    <>
      <h2>Completá los campos del formulario</h2>

      <form onSubmit={manejadorFormulario}>

        <div className="variosForm">
          <label className="label">Nombre</label>
          <input
            className="input"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>

        <div className="variosForm">
          <label className="label">Apellido</label>
          <input
            className="input"
            type="text"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
          />
        </div>

        <div className="variosForm">
          <label className="label">Teléfono</label>
          <input
            className="input"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <div className="variosForm">
          <label className="label">Email</label>
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="variosForm">
          <label className="label">Confirmá tu email</label>
          <input
            className="input"
            type="email"
            value={emailDeConfirmacion}
            onChange={(e) => setEmailDeConfirmacion(e.target.value)}
          />
        </div>

        {error && <p>{error}</p>}

        {ordenId && (
          <p>
            Finalizaste tu compra, gracias!<br /> Tu número de orden es el siguiente: <br />{' '}
            {ordenId}{' '}
          </p>
        )}

        <div>
          <button className="boton1" type="submit">
            Terminar tu compra
          </button>
        </div>
        <br/>
        <div>
        <Link to="/">
          <button className="boton">Volver al inicio</button>
        </Link>
        </div>
      </form>
    </>
  );
};
