import React, { useState, useEffect } from 'react';

function ItemCount ( { stock, initial, onAdd } ) {

    const [carrito, setCarrito] = useState( Number(stock) );

    const [count, setCount] = useState(Number(initial));

    const [suma, setSuma] = useState(Number(initial));

    const incrementCount = () => {
        setCount(count - suma);
        setCarrito(carrito - suma);

    }

    console.log('Stock : ' + carrito);
    console.log('Agregados : ' + suma);
    console.log('Count : ' + count);

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
                <h1>No hay stock disponible</h1>
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
    } 

    else
    {

        if ( suma > carrito - count ) {
            return(
                <div>
                    <input className="form-product" type="number" name="form-product" value={suma} onChange={ e => setSuma(e.target.value)} ></input>
                    <button>
                        Agregar al carrito
                    </button>
                    {/* stock = 5 */}
                    <p> El contador no puede ser mayor al Stock Disponible </p>
                </div>
        
            );
        }
        else {
            return(
                <div>
                    <input className="form-product" type="number" name="form-product" value={suma} onChange={ e => setSuma(e.target.value)} ></input>
                    <button onClick={incrementCount}>
                        Agregar al carrito
                    </button>
                    {/* stock = 5 */}
                    <p>Stock Disponible: { Number(count) + Number(stock) } </p>
                </div>
        
            );
        }


    }


}



export default ItemCount;