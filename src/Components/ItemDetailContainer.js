import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';


const ItemDetailContainer = (props) => {

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
            ] );
        }, 3000);


    })

    Resultado.then( e => {
        console.log(e);
    })

    const [users, setUsers] = useState([]);

    return (
        <div style={{ background: 'red' }}>
            <h3>hola{props.greeting}</h3>
            <ItemCount initial="0" stock="5" />
            <ItemDetail id={users.id} title={users.title} price={users.price} pictureUrl={users.pictureUrl} />
        </div>
    );
}

export default ItemDetailContainer;