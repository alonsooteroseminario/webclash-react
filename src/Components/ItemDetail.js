import React, { useState, useEffect } from 'react';

function ItemDetail ({ id , title, price, pictureUrl }) {

    return (
        <div className="col-lg-6 col-md-6 mt-5 mt-lg-0">
        <div className="product-details">
          <h4>Detalles</h4>
          <div className="product-price my-4"> <span className="d-block">$ <del>$</del></span>
            <span className="text-primary">
            </span>
          </div>
          <ul className="list-unstyled mb-4">
            <li className="mb-2"><span className="text-black"> Availibility: </span> In Stock</li>
            <li><span className="text-black"> Categories :</span> </li>
          </ul>
          <p></p>
          <div className="row my-4">
            <div className="col-sm-2">
              <ul className="list-unstyled">
                <li>
                  <h6 className="mb-2 text-black">Size</h6>
                  <span>
                    <select className="form-control">

                    </select>
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-sm-10 xs-mt-3">
              <div className="filter-color">
                <h4>Color</h4>
                <ul className="list-inline">
                </ul>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <button className="btn-product btn-product-up"> <i className="ti-minus" />
            </button>
            <input className="form-product" type="number" name="form-product" defaultValue={1} />
            <button className="btn-product btn-product-down"> <i className="ti-plus" />
            </button>
          </div>
          <div className="d-flex align-items-center mt-5">

            <div className="product-link">

            </div>
          </div>
        </div>
      </div>
    )
}

export default ItemDetail;