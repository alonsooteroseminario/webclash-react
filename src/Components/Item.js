  
import React, { useState, useEffect } from 'react';

function Item ({ id , title, price, pictureUrl }) {

    return (
        <div className="card" >
            <img src={pictureUrl} className="card-img-top" alt="Card image cap" />
                <div className="card-block" key={id} >
                    <h4 className="card-title">{`${title}: $${price}`}</h4>
                     <input className="add-to-cart btn btn-primary" type="submit" value="Agregar" />
                </div>
        </div>
    )
}

export default Item;