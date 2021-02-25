import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    function addItem(item, quantity) {
        if (isInCart(item && item.id)) {
            console.log('wont add existing obj to cart');
            return;
        }else{
            setCart([...cart, {item, quantity}]);
        }
    }

    function removeItem(itemId) {
        
        if (isInCart(itemId)) {
            var index = cart.indexOf(itemId);
            console.log('se elimina');  
            cart.splice(index, 1);
            
            return;
        }else{
            
        }
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
        return cart;
    }

    function getFromCart(id) {
        return cart.find(obj => obj.id === id)
    }
    
    function isInCart(id) {
        return id === undefined ? undefined : getFromCart(id) !== undefined
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