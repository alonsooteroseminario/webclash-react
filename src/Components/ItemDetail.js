import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

/* eslint-disable jsx-a11y/alt-text */
function ItemDetail ({ id , description, title, price, pictureUrl }) {


    const [quantity, setQuantity] = useState(0);


  
    function onAdd(quantity) {
      
      console.log(`Agregar al cart el item: ${id} con cantidad: ${quantity}`);
      setQuantity(quantity);

    }


    if (quantity === 0) {
      return (
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
                <button onClick={ e => onAdd()}>
                  Comprar
                </button>
              </p>
            </div>

        </div>
      )
    }else {
      return (
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
                  Se comprarán {quantity} items
                </p>
              </p>
            </div>
        </div>
      )
    }



}

export default ItemDetail;