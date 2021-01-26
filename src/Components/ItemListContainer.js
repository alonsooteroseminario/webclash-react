import React, { Component } from 'react';

class ItemListContainer extends Component {
    render() {
        const greeting = 'Aqui abajo irá la lista de nuestros productos';

        return (
            <div>
                <h3>{greeting}</h3>
            </div>
        );
    }
}

export default ItemListContainer;