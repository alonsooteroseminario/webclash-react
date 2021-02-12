  
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './Components/Home';


function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" >
            <Link to={'/'} >
                <Home />    
            </Link>
          </Route>
          <Route exact path="/list">
            <ItemListContainer greeting="Lista de productos" />
          </Route>
          <Route exact path="/item">
            <ItemDetailContainer greeting="Detalle de producto" />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
