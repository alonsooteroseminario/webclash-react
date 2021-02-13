  
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Lista de productos" />
          </Route>
          <Route exact path="/categoria/:ID">
            <ItemListContainer greeting="Lista de productos" />
          </Route>
          <Route exact path="/item/:ID">
            <ItemDetailContainer greeting="Detalle de producto" />
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
