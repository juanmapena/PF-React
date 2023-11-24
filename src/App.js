import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Error from "./Components/Error"
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import CartProvider from "../src/Components/Context/CartContext"
import Cart from "../src/Components/Cart/Cart"
import { Checkout } from "./Components/Checkout/Checkout"

function App() {
  return (
    
    <div className="App">

    <BrowserRouter>
    <CartProvider>
    <NavBar/>
        <Routes >
      <Route path= "/" element = {<ItemListContainer/>}  />
      <Route path= "/categoria/:id" element = {<ItemListContainer />}  />
      <Route path= "/item/:id" element = {<ItemDetailContainer />}  />
      <Route path={"/checkout"} element={<Checkout/>} />
      <Route path = {"/cart"} element = {<Cart/>} />
      <Route path= "*" element = {<Error />}  />
        </Routes>
      </CartProvider>
    </BrowserRouter>
    </div>
    

  );
}

export default App;
