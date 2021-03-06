import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children, defaultCart }) => {
    //Cart es un array con cualquier tipo de elemento: {item:{}, cantidad:0}
    const [cart, setCart] = useState([]);

    function addItem( id, description, title, price, pictureUrl, cantidad) {

        const objeto = {item:{
                                id,
                                description,
                                title,
                                price,
                                pictureUrl
                            }, 
                            quant:Number(cantidad)
                        };

        if (isInCart(id)) {

            const result = cart.filter( obj => Object.values(obj.item.id).join('') !== id)
            setCart([...result, [objeto] ]);

            // console.log(cart);
            return cart;
        }else{
            setCart([...cart, [objeto] ]);

        }
        
    }

    function removeItem(itemId) {
        
        if (cart.length !== 0) {

            debugger;

            const result = cart.filter( obj => Object.values(obj.item.id).join('') !== itemId)
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

        return cart.find( obj => Object.values(obj.item.id).join('') === itemId );
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
