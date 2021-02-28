import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //Cart es un array con cualquier tipo de elemento: {item:{}, cantidad:0}
    const [cart, setCart] = useState([])

    function addItem(item, cantidad) {

        if (isInCart(item.id)) {
            return;
        }else{
            setCart([...cart, [{item, cantidad}] ]);
            console.log(cart);
        }
        
    }

    function removeItem(itemId) {
        var i = 0;
        while (i<cart.length) {
            // eslint-disable-next-line no-self-compare
            if(cart[i].item.id === itemId) {
                cart.splice(i, 1);
            }else {
                ++i;
            }
        }
        console.log(cart);
        return cart;
    }
    
    function clear() {
        var i = 0;
        while (i<cart.length) {
            // eslint-disable-next-line no-self-compare
            if(cart[i] === cart[i]) {
                cart.splice(i, 1);
            }else {
                ++i;
            }
        }
        setCart([]);
        console.log(cart);
        return cart;
    }

    function existe(nuevo_id) {

        for (let index = 0; index < cart.length; index++) {
            const element = cart[index];
            if (element.item.id === nuevo_id) {
                return true;
            }
            return;
        }
    }


    // function getFromCart(item) {
    //     return cart.find(obj => obj.item === item)
    // }
    
    function isInCart(nuevo_id) {
        if (existe(nuevo_id)) {
            return true;
        }else {
            return false;
        }
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