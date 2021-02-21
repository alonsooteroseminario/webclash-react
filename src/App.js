  
import './App.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CartContext, CartProvider } from './context/CartContext';


function App() {

  return (
    <CartProvider>

      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="Lista de productos" home={true} />
            </Route>
            <Route exact path="/categoria/:categoriaID">
              <ItemListContainer greeting="Lista de productos" />
            </Route>
            <Route exact path="/item/:ID">
              <ItemDetailContainer greeting="Detalle de producto" />
            </Route>
            <Route exact path="/cart">

            </Route>
          </Switch>
        </BrowserRouter>
      </div>
      
    </CartProvider>

  );
}

export default App;
