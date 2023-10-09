import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import ItemListContainer from './Components/ItemListContainer';
import logo from './assets/img/logo.jpg'

function App() {
  return (
    
    <div className="App">
      <NavBar logo = {logo} item= "Remeras" item2= "Boxers" item3 = "Pantalones"/>

      <div>
      <ItemListContainer h1 = "Comming Soon" parrafo = "Stay Tuned" />
      </div>
    </div>
    

  );
}

export default App;
