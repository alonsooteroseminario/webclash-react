import React, { useState, useEffect } from 'react';

const ItemCount = ( { stock, initial, addOne } ) => {

    const [count, setCount] = useState(Number(initial));
    console.log(count);

    useEffect( () => {
        console.log('App mounted');
        return () => {
            console.log('will unmount')
        }
    }, []);

    return(
        <div className="d-flex justify-content-center align-items-center" >
            <input className="form-product" type="number" name="form-product" />
            <button onClick={ () => setCount(count + 1) }>
                Agregar al carrito
            </button>
            <p>Stock Disponible: {count} </p>

        </div>

    );
}

// function addOne(number) {
//     let a = Number(number);
//     let b = 1 + a;
//     return b;
// }

// console.log(addOne(1));

export default ItemCount;