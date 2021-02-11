  
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting=", esto si funciona" /> */}
      <ItemDetailContainer greeting="Detalle de producto" />
    </div>
  );
}

export default App;
