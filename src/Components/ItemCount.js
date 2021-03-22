import React, { useState, useEffect } from 'react';

function ItemCount ( { stock, initial, onAdd } ) {

    // eslint-disable-next-line no-unused-vars
    const [carrito, setCarrito] = useState( Number(stock) );

    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(Number(initial));

    const [suma, setSuma] = useState(Number(initial));

    console.log('Stock : ' + carrito);
    console.log('Agregados : ' + suma);
    console.log('Count : ' + count);

    useEffect( () => {
        document.getElementById("input1").addEventListener("onClick", onAdd);
        console.log('App mounted');

        return () => {
            document.removeEventListener("onClick", onAdd);
            console.log('will unmount')
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (carrito === 0) {
        return(
            <div>
                <input disabled="disabled" ></input>
                <p>Stock Disponible: { Number(count) + Number(stock) } </p>
                <h1>No hay stock disponible</h1>
            </div>
        );
    }
    else if (carrito < 0) {
        return(
            <div>
                <input disabled="disabled" ></input>
                <p>Stock Disponible: 0 </p>
                <h1>No hay stock disponible</h1>
            </div>
        );
    } 
    else
    {
        if ( suma > carrito ) {
            return(
                <div>
                    <input className="form-product" type="number" name="form-product" value={carrito} onChange={ e => setSuma(e.target.value)} ></input>
                    <p> El contador no puede ser mayor al Stock Disponible </p>
                </div>
            );
        }
        else if (suma < 0) {
            return(
                <div>
                    <input className="form-product" type="number" name="form-product" value={0} onChange={ e => setSuma(e.target.value)} ></input>
                    <p> El contador no puede ser menor a 0 </p>
                </div>
            );
        }
        else {
            return(
                <div>
                    <input id="input1" className="form-product" type="number" name="form-product" value={suma} onChange={ e => setSuma(e.target.value)} ></input>
                    <p>Se agregarán : {suma} items </p>
                    <p>Stock Disponible: { Number(count) + Number(stock) } </p>
                </div>
            );
        }
    }
}



export default ItemCount;