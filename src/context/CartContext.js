import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {s
    //Cart es un array con cualquier tipo de elemento: {item:{}, cantidad:0}
    const [cart, setCart] = useState([]);

    useEffect( () => {
        if(localStorage.getItem("carrito") !== null ) {
            setCart(JSON.parse(localStorage.getItem("carrito")));
        }
    }, [])

    function addItem(item, cantidad) {

        const objeto = {item:item, quant:Number(cantidad) };

        const id = Object.values(objeto.item.id).join('');

        if (cart.length>0) {
            if (isInCart(id)) {

                const result = cart.filter( (obj) => Object.values(obj.item.id).join('') !== id)

                setCart([...result, objeto]);

                return cart;
            }
            else {
                localStorage.setItem("carrito", JSON.stringify([objeto]))
                setCart([...cart, objeto ]);
                return cart;
            }
        }
        else{

            localStorage.setItem("carrito", JSON.stringify([objeto]))
            setCart([...cart, objeto ]);
            return cart;
        }
        
    }

    function removeItem(itemId) {

        
        if (cart.length !== 0) {

            const result = cart.filter( (obj) => Object.values(obj.item.id).join('') !== itemId)
            setCart(result);

            return cart;
            
        }
        
    }
    
    function clear() {

        setCart([]);

        return cart;
    }


    function getFromCart(itemId) {

        return cart.find( (obj) => String(Object.values(obj.item.id)) === itemId ) !== undefined;
    }
    
    function isInCart(itemId) {

        return itemId === undefined ? false : getFromCart(itemId) !== undefined

    }

    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
        )
    }