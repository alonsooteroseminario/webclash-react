/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { CartProvider } from '../context/CartContext';

function Item ({ id , description, title, price, pictureUrl }) {

    // eslint-disable-next-line no-unused-vars
    const {cart, setCart, addItem, removeItem, clear} = useContext(CartContext);

    // eslint-disable-next-line no-unused-vars
    const [cantidad, setCantidad] = useState(0);

    function addToCart(cantidad) {
      
      const item = {id, description, title, price, pictureUrl};
      const quant = cantidad; 

      setCantidad(cantidad);
      addItem(item, quant);

    }

    return (
      <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear}}>
        <CartProvider>
          <div className="card" >
              <img src={pictureUrl} className="card-img-top" alt="Card image cap" width="25%" height="25%" />
                  <div className="card-block" key={id} >
                      <h4 className="card-title">{`${title}: $${price}`}</h4>
                      <ItemCount initial="0" stock="5" />
                  </div>
                  {/* este tiene que ser dinamico */}
                <Link to={`/item/${id}`} >
                  <div className="add-to-cart">
                    <input className="add-to-cart btn btn-primary" type="submit" value="Ir al Detalle de Producto" />
                  </div>
                </Link>
                
                <p>
                <Link to={'/cart'}>
                  <button>
                    Ir al carrito de Compras
                  </button>
                </Link>
                  </p>

                  <p>
                    <button onClick={ () => { 

                      addToCart(document.getElementById("input1").value);

                      } } >
                      Agregar al Carrito
                    </button>
                  </p>
          </div>
        </CartProvider>
      </CartContext.Provider>
    )
}

export default Item;