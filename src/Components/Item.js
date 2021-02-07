import React, { useState, useEffect } from 'react';

function Item ({ item }) {
    const Resultado = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Se ejecuto la funcion');
            setUsers( [
              {
                id: 1,
                title: "naranja",
                price: 20,
                pictureUrl: "http://www.azspagirls.com/files/2010/09/orange.jpg",
              },
              {
                id: 2,
                title: "platano",
                price: 32,
                pictureUrl: "http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg",
              },      {
                id: 3,
                title: "limón",
                price: 51,
                pictureUrl: "https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg",
              },
            ] );
        }, 3000);


    })

    Resultado.then( e => {
        console.log(e);
    })

    const [users, setUsers] = useState([]);


    return (
      <div className="container">
        <div className="row">
          <div className="col">
              {users.map( el => 
                    <div className="card" >
                        <img src={el.pictureUrl} className="card-img-top" alt="Card image cap" ></img>
                        <div className="card-block" key={el.id} >
                            <h4 className="card-title">{`${el.title}: $${el.price}`}</h4>
                            <input className="add-to-cart btn btn-primary" type="submit" value="Agregar" />
                        </div>
                    </div>
              )}
          </div>
        </div>
      </div>
    )
}

export default Item;