/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';

function ItemDetail ({ id , description, title, price, pictureUrl }) {

    const [quantity, setQuantity] = useState(0);
    const [cantidad, setCantidad] = useState(0);

    useEffect( () => {
      document.getElementById("input1").addEventListener("onClick", onAdd);
      console.log('App mounted');

      return () => {
          document.removeEventListener("onClick", onAdd);
          console.log('will unmount')
      }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    // eslint-disable-next-line no-unused-vars
    const {cart, setCart, addItem, removeItem, clear} = useContext(CartContext);
    // console.log(cart);
  
    function onAdd(cantidad) {
    
      setQuantity(cantidad);
      setCantidad(cantidad);

    }

    function clearQuantity() {
      setQuantity(0);
      setCantidad(0);
    }

    function addToCart(cantidad) {
      
      const item = {id, description, title, price, pictureUrl};
      const quant = cantidad; 

      setCantidad(cantidad);
      addItem(item, quant);

    }

    function removeToCart(cantidad) {

      setCantidad(cantidad);
      removeItem(id);

    }
    
    if (quantity === 0) {
      return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear }}>
          <div className={'item item-' + id} key={id} >
            <img src={pictureUrl} />
              <div className='item-details'>
                <h1 className='item-name'>
                  {title}
                </h1>
                <h2 className='item-price'>
                  ${Number(price)}
                </h2>
                <p className='item-desc'>
                  {description}
                </p>
                <p className="item-count">
                  <ItemCount initial="0" stock="5" />
                </p>
                <p>
                  <button onClick={ () => {

                    onAdd(document.getElementById("input1").value);

                    } } >
                    Comprar
                  </button>
                </p>
                <p>
                  <button onClick={ () => { 
                    addToCart(document.getElementById("input1").value);
                    } } >
                    Agregar al Carrito
                  </button>
                </p>
                <p>
                El carrito tiene {Number(cart.length)} items y se va a agregar
                al carrito el nuevo item: {title} con cantidad de: {cantidad}
                </p>

                <p>
                  <button onClick={ () => {
                    removeToCart( cantidad );
                  } } >
                    Borrar del Carrito
                  </button>
                </p>
                <p>
                  <button onClick={ () => {
                    clear();
                    clearQuantity();
                                         } } >
                    Borrar Todo
                  </button>
                </p>
              </div>
          </div>
          </CartContext.Provider>
      )
    }else {
      return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, clear }}>
        <div className={'item item-' + id} key={id} >
          <img src={pictureUrl} />
            <div className='item-details'>
              <h1 className='item-name'>
                {title}
              </h1>
              <h2 className='item-price'>
                ${Number(price)}
              </h2>
              <p className='item-desc'>
                {description}
              </p>
              <p className="item-count">
              <Link to={'/cart'}>
                <button>
                  Terminar mi compra
                </button>
              </Link>
                <p>
                  Se comprarán {Number(quantity)} items
                </p>
                <Link to={'/'}>
                <button>
                  Seguir comprando
                </button>
              </Link>
                <p>
                El carrito tiene {Number(cart.length)} items y se va a agregar
                al carrito el nuevo item: {title} con cantidad de: {cantidad}
                </p>
                <p>
                  <button onClick={ () => {
                    
                    removeToCart( cantidad );
                  
                  } } >
                    Borrar del Carrito
                  </button>
                </p>

                <p>
                <button onClick={ () => {
                    clear();
                    clearQuantity();
                                         } } >
                    Borrar Todo
                  </button>
                </p>
              </p>
            </div>
        </div>
        </CartContext.Provider>
      )
    }
}

export default ItemDetail;