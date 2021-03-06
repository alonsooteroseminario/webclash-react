/* eslint-disable no-const-assign */
import React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { CartProvider } from '../context/CartContext';
import firebase from 'firebase/app';
import '@firebase/firestore';
import { getFirestore } from '../firebase';


const CheckOut = (props) => {

    const {cart, setCart, removeItem} = useContext(CartContext);
    console.log(cart);

    const [order, setOrderId] = useState({});
    const [error, setError] = useState('');
    const [loading, setLoading] = useState('');

    const db = getFirestore();
    
    const orders = db.collection("orders");
    const newOrder = {
        buyer: { },
        items: cart,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: {},
    }
    orders.add(newOrder).then( ({id}) => {
        setOrderId(id);
    }).catch( err => {
        setError(err);
    }).finally( () => {
        setLoading(false);
    });

    // var docRef = db.collection('items').doc(itemId);

    // var actualizarStock = docRef.update({
    //     stock: stockPrevio -cantidadComprar
    // });

    // const batch = db.batch();

    // batch.update(doc1, {field: 'newFieldValue'});
    // batch.set(doc2, {field: 'newFieldValue'});

    // batch.commit().then(r => r);



    return (
        <CartProvider>
            <div>
                <div>
                    {/*hero section start*/}
                    <section className="position-relative">
                    </section>
                    {/*hero section end*/}
                    {/*body content start*/}
                    <div className="page-content">
                        <section>
                            <div className="container">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="checkout-form box-shadow white-bg">
                                                <h2 className="mb-4">Billing Details</h2>
                                                <form className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>First Name</label>
                                                            <input type="text" id="fname" className="form-control" placeholder="Your firstname" />
                                                            <span className="error"></span> 
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Last Name</label>
                                                            <input type="text" id="lname" className="form-control" placeholder="Your lastname" />
                                                            <span className="error"></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>E-mail Address</label>
                                                            <input type="text" id="email" className="form-control" placeholder="State Province"  />
                                                            <span className="error"></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Phone Number</label>
                                                            <input type="text" id="phone" className="form-control" placeholder />
                                                            <span className="error"></span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12 md-mt-5">
                                            <div className="p-3 p-lg-5 border">
                                                <h3 className="mb-3">Your Order</h3>
                                                {(cart.length > 0) ?
                                                <ul className="list-unstyled">
                                                    {cart.map((el) => (
                                                    <li className="mb-3 border-bottom pb-3"><span>  x  </span> $ </li>
                                                    ))}
                                                    <li className="mb-3 border-bottom pb-3"><span> Shipping </span> $ 0.00</li>
                                                    <li className="mb-3 border-bottom pb-3"><span> Subtotal </span> $ </li>
                                                    <li><span><strong className="cart-total"> Total :</strong></span>  <strong className="cart-total">$ </strong>
                                                    </li>
                                                </ul>
                                                :  <div>No Items found</div>
                                                }
                                            </div>
                                            <div className="cart-detail my-5">
                                                <h3 className="mb-3">Payment Method</h3>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio1">Direct Bank Tranfer</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio2">Check Payment</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio3">Paypal Account</label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                        <label className="custom-control-label" htmlFor="customCheck1">I have read and accept the terms and conditions</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-block">Proceed to Payment</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                    {/*body content end*/}
                </div>
            </div>
        </CartProvider>
    )


}

export default CheckOut;