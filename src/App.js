  
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
      <NavBar />
      <BrowserRouter>
        <li>
          <Link to={'/'} >
            Home
          </Link>
        </li>
        <li>
          <Link to={'/list'} >
            Ir al MarketPlace
          </Link>
        </li>
        <Switch>
          <Route exact path="/list">
            <ItemListContainer greeting=", esto si funciona" />
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
