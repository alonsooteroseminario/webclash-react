/* eslint-disable no-const-assign */
import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Cart = (props) => {

    const {cart, setCart, addItem, removeItem, clear} = useContext(CartContext);


    //cart.length*cantidad

    return (
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
                                                    <th scope="col">id</th>
                                                    <th scope="col">description</th>
                                                    <th scope="col">title</th>
                                                    <th scope="col">price</th>
                                                    <th scope="col">pictureUrl</th>
                                                    <th scope="col">Borrar</th>
                                                    <th scope="col">Cantidad</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {cart.map( el => {

                                                        return(
                                                                <tr>
                                                                    <td>
                                                                        <div className="media align-items-center">
                                                                            <Link to="/">
                                                                            <img className="img-fluid rounded box-shadow" alt="" />
                                                                            </Link>
                                                                            <div className="media-body">
                                                                            <p>
                                                                                {el.item}
                                                                              
                                                                               
                                                                            </p>
                                                                            </div>
                                                                        </div>
                                                                    </td>

                                                                    <td>
                                                                        <h5 className="mb-0">
                                                                           
                                                                        </h5>
                                                                    </td>

                                                                    <td>
                                                                       
                                                                    </td>

                                                                    <td>
                                                                        <h5 className="mb-0">
                                                                            
                                                                        </h5>
                                                                    </td>

                                                                    <td>
                                                                       
                                                                    </td>

                                                                    <td>
                                                                        <Link type="submit" className="btn btn-primary btn-sm"  ><i className="ti-close" />
                                                                        X
                                                                        </Link>
                                                                    </td>

                                                                    <td>
                                                                        <div className="d-flex justify-content-center align-items-center">
                                                                        
                                                                            <input className="form-product" type="number" name="form-product" />

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
                                                <h3 className="text-black h4 text-uppercase">Cart Totals</h3>
                                                </div>
                                            </div>
                                            <div className="row mb-3">
                                                <div className="col-md-6">
                                                <span className="text-black">Subtotal</span>
                                                </div>

                                                <div className="col-md-6 text-right">
                                                        <strong className="text-black">  </strong>
                                                    </div>

                                            </div>
                                            <div className="row mb-5">
                                                <div className="col-md-6">
                                                <span className="text-black">Total</span>
                                                </div>
                                                <div className="col-md-6 text-right">
                                                    <strong className="text-black"> 

                                                   
                                                    
                                                    </strong>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-12">
                                                <Link className="btn btn-primary btn-md btn-block" to="/checkout">Proceed To Checkout</Link>
                                                <Link className="btn btn-outline-primary btn-md btn-block" to="/categoria/:categoriaID">Continue Shopping</Link>
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
                                            <h3 className="mb-4">Your cart is Currently Empty.</h3>
                                            <Link className="btn btn-primary mr-3" to="/">Home</Link>
                                            <Link className="btn btn-primary" to="/">Continue Shoppings</Link>
                                        </div>
                                    </div>
                            }
                        </div>
                        

                    </section>
           
        </div>
        )

}

export default Cart;