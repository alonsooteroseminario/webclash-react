/* eslint-disable no-const-assign */
import React from 'react';
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext';
import firebase from 'firebase/app';
import '@firebase/firestore';
import { getFirestore } from '../firebase';
import { CartProvider } from '../context/CartContext';

const CheckOut = () => {

    const {cart} = useContext(CartContext);
    console.log(cart);

    const [orderId, setOrderId] = useState({});
    // eslint-disable-next-line no-unused-vars
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirmado, setEmailConfirmado] = useState('');
    const [nombreCompleto, setNombreCompleto] = useState('');

    const [carTotal, setCartTotal] = useState(0);

    const sumaNombreCompleto = () => {
        let completo = firstName + " " + lastName;
        setNombreCompleto(completo);
        return completo;
    }

    useEffect( () => {
        total();
        sumaNombreCompleto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart, firstName, lastName]);

    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
            totalVal = totalVal + (Number(cart[i].quant) * Number(cart[i].item.price));
        }
        setCartTotal(totalVal);
    };

    const finalizarCompra = async () => {

        if (emailConfirmado === email) {
            
            setLoading(true);

            const baseDeDatos = getFirestore();
            const orders = baseDeDatos.collection('orders');
    
            let newOrder = {
                buyer: { nombreCompleto , phone, email },
                items: [...cart],
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                total: carTotal
            };
    
            console.log(newOrder);
    
            orders.add(newOrder).then( (or) => {
                let id = or.id;
                console.log(id);
                console.log(or);
                setOrderId(id);
    
            }).catch( (err) => {
                setError(err);
    
            }).finally( () => {
    
            });
    
            console.log(orders);

        }
        else{
            alert("Los emails no coinciden. Escribelos correctamente por favor para poder continuar con la compra")
        }

    };

    return (

        <CartProvider>
            <div>
                <div>
                    {/*body content start*/}
                    <div className="page-content">
                        { loading !== true
                        
                        ?
                    
                        <section>
                            <div className="container">
                                <form>
                                    <div className="row">
                                        <div className="col-lg-7 col-md-12">
                                            <div className="checkout-form box-shadow white-bg">
                                                <h2 className="mb-4">Detalles de la compra</h2>
                                                <form className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Nombres</label>
                                                            <input type="text" id="fname" className="form-control" placeholder="Nano" onChange={ e => setFirstName(e.target.value)}/>
                                                            <span className="error"></span> 
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Apellidos</label>
                                                            <input type="text" id="lname" className="form-control" placeholder="Perez" onChange={ e => setLastName(e.target.value)}/>
                                                            <span className="error"></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Correo electrónico</label>
                                                            <input type="text" id="email" className="form-control" placeholder="ejemplo@gmail.com" onChange={ e => setEmail(e.target.value)} />
                                                            <span className="error"></span>
                                                        </div>
                                                        <div className="form-group">
                                                            <label>Confirma el mismo Correo electrónico</label>
                                                            <input type="text" id="email" className="form-control" placeholder="ejemplo@gmail.com" onChange={ e => setEmailConfirmado(e.target.value)} />
                                                            <span className="error"></span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <label>Número de teléfono</label>
                                                            <input type="text" id="phone" className="form-control" placeholder="+5695656567" onChange={ e => setPhone(e.target.value)}/>
                                                            <span className="error"></span>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12 md-mt-5">
                                            <div className="p-3 p-lg-5 border">
                                                <h3 className="mb-3">Your Order</h3>
                                                {  (cart.length > 0) 
                                                    ?

                                                    <ul className="list-unstyled">
                                                        {cart.map((el) => (
                                                        <li className="mb-3 border-bottom pb-3"><span>  {el.item.title}  </span> $ </li>
                                                        ))}
                                                        <li className="mb-3 border-bottom pb-3"><span> Shipping </span> $ 0.00</li>
                                                        <li><span><strong className="cart-total"> Total :</strong></span>  <strong className="cart-total">$ {carTotal} </strong>
                                                        </li>
                                                    </ul>

                                                    :  

                                                    <div>No se encuentran elementos</div>

                                                }
                                            </div>
                                            <div className="cart-detail my-5">
                                                <h3 className="mb-3">Método de Pago</h3>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio1" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio1">Transferencia bancaria directa</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio2" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio2">Tarjeta de crédito</label>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-control custom-radio">
                                                        <input type="radio" id="customRadio3" name="customRadio" className="custom-control-input" />
                                                        <label className="custom-control-label" htmlFor="customRadio3">Cuenta de Paypal</label>
                                                    </div>
                                                </div>
                                                <div className="form-group mb-0">
                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                        <label className="custom-control-label" htmlFor="customCheck1">He leído y acepto los terminos y condiciones del servicio.</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <button className="btn btn-primary btn-block" onClick={ () => { finalizarCompra() }}>Proceder al pago</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>



                        :

                        <section>
                            <div className="container">
                                <form>
                                    <div className="row">
                                        <div className="container">
                                            <h2 className="mb-4">Gracias por tu compra! tu Código de order es: {orderId.toString()} </h2>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                       
                    
                        }

                    </div>
                    {/*body content end*/}


                </div>
            </div>
        </CartProvider>
 
    )


}

export default CheckOut;