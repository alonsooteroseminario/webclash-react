/* eslint-disable jsx-a11y/alt-text */
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/CartContext';


function ItemDetail ({ id , description, title, price, pictureUrl }) {


    const [quantity, setQuantity] = useState(0);
    const [cantidad, setCantidad] = useState(0);
    // useContext()
    // eslint-disable-next-line no-unused-vars
    const {cart, setCart, addItem, removeItem, clear} = useContext(CartContext);
    console.log(cart);
  
    function onAdd(cantidad) {
    
      setQuantity(cantidad);
      setCantidad(cantidad);

      // guardar en el CartContext el objeto { item: {}, quantity}
      setCart([...cart,
        [{ 

          item:{ 
                id:{id},
                description:{description}, 
                title:{title},
                price:{price},
                pictureUrl:{pictureUrl},
                }, 

          cantidad:cantidad,

        },]
      ]);

    }

    function clearQuantity() {
      setQuantity(0);
      setCantidad(0);
    }

    function addToCart(cantidad) {
      
      setCantidad(cantidad);
      addItem({ 
                id:{id},
                description:{description}, 
                title:{title},
                price:{price},
                pictureUrl:{pictureUrl},
              }, cantidad)

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
                    
                    removeItem(
                      { 
                        id
                      }
                    );
                  
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
                  Se comprarán {Number(quantity)} items
                </p>
                <p>
                El carrito tiene {Number(cart.length)} items y se va a agregar
                al carrito el nuevo item: {title} con cantidad de: {cantidad}
                </p>

                <p>
                  <button onClick={ () => {
                    
                    removeItem(
                      { 
                        id
                      }
                    );
                  
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


      )
    }



}

export default ItemDetail;