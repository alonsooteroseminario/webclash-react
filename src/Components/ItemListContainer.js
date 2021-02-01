import React from 'react';
import ItemCount from './ItemCount';



const ItemListContainer = (props) => {
    return (
        <div style={{ background: 'red' }}>
            <h3>hola{props.greeting}</h3>
            <ItemCount initial="0" stock="5" />
        </div>
    );
}

export default ItemListContainer;