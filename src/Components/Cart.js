/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-const-assign */
import React, { useEffect } from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CartProvider } from '../context/CartContext';

const Cart = (props) => {

    const {cart, setCart, addItem, removeItem, clear} = useContext(CartContext);
    console.log(cart);

    const [carTotal, setCartTotal] = useState(0);
    const [itemTotal, setItemTotal] = useState(0);

    useEffect( () => {
        total();
        totalItem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal = totalVal + (Number(cart[i].quant) * Number(cart[i].item.price));  
        }
        setCartTotal(totalVal);
    };

    const totalItem = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal = totalVal + (Number(cart[i].quant));  
        }
        setItemTotal(totalVal);
    };


    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear}}>
            <CartProvider>
                <div>
                        <section>
                            <div className="container">
                                { cart.length !== 0 
                                
                                    ?
                                        <div>
                                            <div className="table-responsive">
                                                <table className="cart-table table table-bordered">
                                                    <thead>
                                                        <tr>
                                                        <th scope="col">Id de Elemento</th>
                                                        <th scope="col">Descripción</th>
                                                        <th scope="col">Título</th>
                                                        <th scope="col">Precio</th>
                                                        <th scope="col">Imagen</th>
                                                        <th scope="col">Borrar</th>
                                                        <th scope="col">Cantidad</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>

                                                        { cart.map( (el) => {
 
                                                            return(
                                                                    <tr>
                                                                        <td>
                                                                            <div className="media align-items-center">
                                                                                <Link to="/">
                                                                                <img className="img-fluid rounded box-shadow" alt="" />
                                                                                </Link>
                                                                                <div className="media-body">
                                                                                <p>
                                                                                    
                                                                          {el.item.id}
                                                                         

                                                                                </p>
                                                                                </div>
                                                                            </div>
                                                                        </td>

                                                                        <td>
                                                                            <h5 className="mb-0">
                                                                            {el.item.description}
                                                                            </h5>
                                                                        </td>

                                                                        <td>
                                                                            {el.item.title}
                                                                        </td>

                                                                        <td>
                                                                            <h5 className="mb-0">
                                                                            {el.item.price}
                                                                            </h5>
                                                                        </td>

                                                                        <td>
                                                                            <img src={el.item.pictureUrl} />
                                                                        </td>

                                                                        <td>
                                                                            <Link type="submit" className="btn btn-primary btn-sm" onClick={ () => { removeItem(cart[cart.indexOf(el)].item.id)} }  ><i className="ti-close" />
                                                                            X
                                                                            </Link>
                                                                        </td>

                                                                        <td>
                                                                            <div className="d-flex justify-content-center align-items-center">
                                                                            
                                                                                <input className="form-product" type="number" name="form-product" value={el.quant} />
                                                                                
                                                                            </div>
                                                                        </td>

                                                                    </tr>
                                                                )
                                                            }

                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>

                                        <div className="row mt-8">
                                            <div className="col-lg-6">
                                            <div className="row">
                                            </div>
                                            </div>
                                            <div className="col-lg-6 pl-5 mt-5 mt-lg-0">
                                            <div className="row justify-content-end">
                                                <div className="col-md-7">
                                                <div className="row">
                                                    <div className="col-md-12 text-right border-bottom mb-5">
                                                    <h3 className="text-black h4">
                                                        Items en el carrito : {itemTotal} 
                                                    </h3>
                                                    </div>
                                                </div>

                                                    { cart.map( (el) => {
                                                        return(

                                                            <div className="row mb-3">
                                                                <div className="col-md-6">
                                                                    <span className="text-black">Subtotal {cart.indexOf(el)+1} </span>
                                                                </div>
                                                                <div className="col-md-6 text-right">
                                                                    <strong className="text-black">
                                                                        {el.quant} x ${el.item.price} = ${Number(el.quant)*Number(el.item.price)}
                                                                    </strong>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}


                                                <div className="row mb-5">
                                                    <div className="col-md-6">
                                                    <span className="text-black">Total</span>
                                                    </div>
                                                    <div className="col-md-6 text-right">
                                                        <strong className="text-black"> 

                                                        ${carTotal}
                                                        
                                                        </strong>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                    <Link className="btn btn-primary btn-md btn-block" to="/checkout">Proceder a Pagar</Link>
                                                    <Link className="btn btn-outline-primary btn-md btn-block" to="/categoria/:categoriaID">Continuar comprando</Link>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        </div>
                                    :
                                        <div className="row">
                                            <div className="col-md-12 text-center pb-11">
                                                <h3 className="mb-4">Tu carrito de compras está vacío.</h3>
                                                <Link className="btn btn-primary mr-3" to="/">Inicio</Link>
                                                <Link className="btn btn-primary" to="/">Continuar comprando</Link>
                                            </div>
                                        </div>
                                }
                            </div>
                        </section>
                </div>
            </CartProvider>
        </CartContext.Provider>
        
        )

}

export default Cart;