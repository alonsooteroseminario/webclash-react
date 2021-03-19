import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';

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
            <i className="shopping-cart"></i>
          </span>
        </div>
        :
        <div>
          <span>
            <i className="shopping-cart">
            </i>
            {elements}
          </span>
        </div>
      }
    </div>
  );
}

export default CartWidget;