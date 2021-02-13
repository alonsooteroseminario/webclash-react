import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';


const ItemListContainer = (props) => {
    return (
        <div style={{ background: 'white' }}>
            <h3>{props.greeting}</h3>
            {/* <ItemCount initial="0" stock="5" /> */}
            <ItemList />
        </div>
    );
}

export default ItemListContainer;