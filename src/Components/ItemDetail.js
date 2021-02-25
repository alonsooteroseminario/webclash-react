/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';


function ItemDetail ({ id , description, title, price, pictureUrl }) {


    const [quantity, setQuantity] = useState(0);
    // useContext()
    const {cart, setCart, addItem, removeItem, clear} = useContext(CartContext);
    console.log(cart);
  
    function onAdd(quantity) {
      
      console.log(`Agregar al cart el item: ${id} con cantidad: ${quantity}`);
      setQuantity(quantity);
      // console.log(document.getElementById("input1").value);
      // quantity.preventDefault();
      // quantity.stopPropagation();

      // guardar en el CartContext el objeto { item: {}, quantity}
      setCart([
        ...cart,
        [{ 
          item:{ 
            id:{id},
            description:{description}, 
            title:{title},
            price:{price},
            pictureUrl:{pictureUrl},
          }, 
          quantity:{quantity},
        }],
      ]);
      console.log(cart);
    }

    

    if (quantity === 0) {
      return (
      //  <CartProvider>
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
                  <button onClick={ () => {onAdd(document.getElementById("input1").value)} } >
                    Comprar
                  </button>
                </p>
                <p>
                  <button onClick={ () => {addItem({
                                id:{id},
                                description:{description}, 
                                title:{title},
                                price:{price},
                                pictureUrl:{pictureUrl},
                  }, document.getElementById("input1").value)} } >
                    Agregar al Carrito
                  </button>
                </p>
                <p>
                  <button onClick={ () => {removeItem({id})} } >
                    Borrar del Carrito
                  </button>
                </p>
                <p>
                  <button onClick={ () => {clear()} } >
                    Borrar Todo
                  </button>
                </p>
              </div>
          </div>
        // </CartProvider>
      )
    }else {
      return (
      // <CartProvider>
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
              </p>
            </div>
        </div>
      // </CartProvider>

      )
    }



}

export default ItemDetail;