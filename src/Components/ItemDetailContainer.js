import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount';
import ItemDetail from './ItemDetail';




const ItemDetailContainer = (props) => {
    return (
        <div style={{ background: 'red' }}>
            <h3>hola{props.greeting}</h3>
            <ItemCount initial="0" stock="5" />
            <ItemDetail />
        </div>
    );
}

export default ItemDetailContainer;