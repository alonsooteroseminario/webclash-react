import React, { useState, useEffect } from 'react';

const ItemCount = ( { stock, initial, onAdd } ) => {

    const [carrito, setCarrito] = useState( Number(stock) );

    const [count, setCount] = useState(Number(initial));


    const [suma, setSuma] = useState(document.getElementById('input'));
    // const suma = 1;

    const incrementCount = () => {
        setCount(count - suma);
        setCarrito(carrito - suma);
        setSuma();
    }


    


    console.log('carrito : ' + carrito);
    console.log('count : ' + count);
    console.log('suma : ' + suma);





    useEffect( () => {
        console.log('App mounted');
        return () => {
            console.log('will unmount')
        }
    }, []);

    if (carrito === 0) {
        return(
            <div>
                <input></input>
                <button>
                    Agregar al carrito
                </button>
                {/* stock = 5 */}
                <p>Stock Disponible: { Number(count) + Number(stock) } </p>
                <p>
                    <h1>No hay stock disponible</h1>
                </p>
            </div>
        );
        
    }

    else if (carrito < 0) {
        return(
            <div>
                <input></input>
                <button>
                    Agregar al carrito
                </button>
                {/* stock = 5 */}
                <p>Stock Disponible: 0 </p>
                
                    <h1>No hay stock disponible</h1>
                
            </div>
        );
    } else 
    {
        return(
            <div>
                <input id="input" ></input>
                <button onClick={incrementCount}>
                    Agregar al carrito
                </button>
                {/* stock = 5 */}
                <p>Stock Disponible: { Number(count) + Number(stock) } </p>

            </div>
    
        );
    }


}


function onAdd(number1, number2) {
    let a = Number(number1);
    let b = Number(number2) + a;
    return b;
}


export default ItemCount;