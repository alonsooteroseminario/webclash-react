import React, { useState } from 'react';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = (props) => {

    const getItems = () => {
        return new Promise(resolve => {
            setTimeout( () => {
                resolve('I did something')
                setUsers(
                    {                    
                        id: 1,
                        description: "La naranja es un fruto hesperidio (pulpa carnosa entre el endocarpio y las semillas en forma de gajos llenos de zumo), de corteza lisa y más o menos endurecida con vesículas oleosas. Tiene sabor dulce o ligeramente agrio, dependiendo de la variedad.",
                        title: "Naranja",
                        price: 20,
                        pictureUrl: "http://www.azspagirls.com/files/2010/09/orange.jpg",
                    },
                )
                
            }, 3000 )
        })
    }
    
    const [users, setUsers] = useState('');


    getItems();

    getItems().then( e => {
        console.log(e);
    })


    return (
        <div style={{ background: 'red' }}>
            <h3>{props.greeting}</h3>
            <ItemCount initial="0" stock="5" />
            <ItemDetail id={users.id} description={users.description} title={users.title} price={users.price} pictureUrl={users.pictureUrl} />
        </div>
    );
}

export default ItemDetailContainer;