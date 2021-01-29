import React from 'react';


const ItemListContainer = (props) => {
    return (
        <div style={{ background: 'red' }}>
            <h3>hola{props.greeting}</h3>
        </div>
    );
}

export default ItemListContainer;