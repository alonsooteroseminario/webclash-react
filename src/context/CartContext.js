import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
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
        // alert(Object.values(objeto.item.id).join(''));
        if (cart.length>0) {
            if (isInCart(id)) {

            
                const result = cart.filter( (obj) => Object.values(obj.item.id).join('') !== id)
                // localStorage.setItem("carrito", JSON.stringify([objeto]))
                debugger;
                // setCart(result);
                setCart([...result, objeto]);
    
                // console.log(cart);
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

            debugger;

            const result = cart.filter( (obj) => Object.values(obj.item.id).join('') !== itemId)
            setCart(result);

            // console.log(cart);
            return cart;
            
        }
        
    }
    
    function clear() {

        setCart([]);
        // console.log(cart);
        return cart;
    }


    function getFromCart(itemId) {
        // alert(itemId)
        debugger;
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