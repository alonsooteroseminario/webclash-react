import React, { useState } from 'react';
import Item from './Item';

function ItemList ({ items }) {

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
                      <Item id={el.id} title={el.title} price={el.price} pictureUrl={el.pictureUrl} />
                )}
            </div>
          </div>
      </div>
    )
}



export default ItemList;