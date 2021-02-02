import React, { useState, useEffect } from 'react';

function Item ({ item }) {
    const Resultado = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Se ejecuto la funcion');
        }, 3000);
    })

    Resultado.then( e => {
        console.log(e);
    })


    return (
        <div>
            <section>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-6 sm-mt-5">
                    <h3>Item numero 1</h3>
                  </div>
                  <div className="col-lg-6 col-md-6 mt-5 mt-lg-0">
                    <div className="product-details">
                    <p>Item numero 2</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        </div>
    )
}

export default Item;