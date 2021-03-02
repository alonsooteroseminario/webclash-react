import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children, defaultCart }) => {
    //Cart es un array con cualquier tipo de elemento: {item:{}, cantidad:0}
    const [cart, setCart] = useState([])

    function addItem(item, cantidad) {

        if (isInCart(item.id)) {


            cart.filter(obj => obj.item !== item);
            setCart([...cart, [{item, cantidad}] ]);

            console.log(cart);
            return cart;
        }else{
            setCart([...cart, [{item, cantidad}] ]);
            // console.log(cart);
        }
        
    }

    function removeItem(itemId) {
        
        if (cart.length !== 0) {

            debugger;

            cart.filter( obj => obj.item !== itemId);

            console.log(cart);
            return cart;
            
        }
        
    }
    
    function clear() {

        setCart([]);
        console.log(cart);
        return cart;
    }


    function getFromCart(itemId) {
        debugger;
        return cart.find(obj => obj.item === itemId)
    }
    
    function isInCart(itemId) {
        return itemId === undefined ? undefined : getFromCart(itemId)!== undefined

    }

    return (
        <CartContext.Provider value={{cart, setCart, addItem, removeItem, clear}}>
            {children}
        </CartContext.Provider>
    )
}

// addItem(item, quantity)
// removeItem(itemId)
// Clear()
// isInCart:(id)=>true|false