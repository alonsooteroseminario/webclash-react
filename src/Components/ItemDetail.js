import React, { useState, useEffect } from 'react';

function ItemDetail ({ id , title, price, pictureUrl }) {

    return (
        <div className="col-lg-6 col-md-6 mt-5 mt-lg-0">
          <div className="product-details" key={id} >
            <h4>Detalles</h4>
            <div className="product-price my-4"> <span className="d-block">$hfhghfhgf <del>$hfghgfhfghfhg</del></span>
              <span className="text-primary">
              `${title}: $${price}`
              </span>
            </div>
            <ul className="list-unstyled mb-4">
              <img src={pictureUrl} className="card-img-top" alt="Card image cap" ></img>
              <li className="mb-2"><span className="text-black"> Availibility: </span> In Stock</li>
              <li><span className="text-black"> Categories :</span> </li>
            </ul>
            <p></p>
          </div>
      </div>
    )
}

export default ItemDetail;