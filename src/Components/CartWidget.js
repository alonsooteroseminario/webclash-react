import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {

  const {cart} = useContext(CartContext);

  let elements = 0;
  for (let index = 0; index <cart.length; index++) {
    elements = elements + Number(cart[index].quant);
  }

  return (
    <div>
      { cart.length === 0 
        ?
        <div>
          <span>
          <Link to={'/cart'} >
            <i className="shopping-cart" type="submit" value="Ir al Carrito" ></i>
          </Link>
          </span>
        </div>
        :
        <div>
          <span>
          <Link to={'/cart'} >
            <i className="shopping-cart" type="submit" value="Ir al Carrito" ></i>
            </Link>
            {elements}
          </span>
        </div>
      }
    </div>
  );
}

export default CartWidget;