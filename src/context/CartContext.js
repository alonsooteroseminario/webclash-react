import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children, defaultCart }) => {
    //Cart es un array con cualquier tipo de elemento: {item:{}, cantidad:0}
    const [cart, setCart] = useState([])

    function addItem(item, cantidad) {

        if (isInCart(item)) {


            cart.filter(obj => obj.item !== item);
            setCart([...cart, [{item, cantidad}] ]);


            // for (let index = 0; index < cart.length; index++) {
            //     const element = cart[index];
            //     if (element.item === {item}) {
            //         cart.splice(index, 1);
            //         setCart([...cart, [{item, cantidad}] ]);
            //     }
            // }

            // var index_0 = cart.indexOf({item, cantidad});
            // cart.slice(index_0,1,{item, cantidad});

            console.log(cart);
            return cart;
        }else{
            setCart([...cart, [{item, cantidad}] ]);
            // console.log(cart);
        }
        
    }

    function removeItem(itemId, description, title, price, pictureUrl, cantidad ) {
        
        if (cart.length !== 0) {

            const item = {
                id:{itemId},
                description:{description},
                title:{title},
                price:{price},
                pictureUrl:{pictureUrl},
            }

            cart.filter( obj => obj[item].id !== itemId);

            // for (let index = 0; index < cart.length; index++) {
            //     const element = cart[index];
            //     if(element.item === {item:{
            //                                 id:{itemId},
            //                                 description:{description}, 
            //                                 title:{title},
            //                                 price:{price},
            //                                 pictureUrl:{pictureUrl},
            //                             }
            //                         }) {
            //         cart.splice(index, 1);
            //     }
                
            // }

            // var i = 0;
            // while (i<cart.length) {
            //     // eslint-disable-next-line no-self-compare

            //     if(cart[i].item === {item:{id:itemId}, cantidad}) {
            //         cart.splice(i, 1);
            //     }else {
            //         ++i;
            //     }
            // }
            console.log(cart);
            return cart;
            
        }
        
    }
    
    function clear() {
        // var i = 0;
        // while (i<cart.length) {
        //     // eslint-disable-next-line no-self-compare
        //     if(cart[i] === cart[i]) {
        //         cart.splice(i, 1);
        //     }else {
        //         ++i;
        //     }
        // }
        setCart([]);
        console.log(cart);
        return cart;
    }


    function getFromCart(item) {
        return cart.find(obj => obj.item === item)
    }
    
    function isInCart(item) {
        return item === undefined ? undefined : getFromCart(item)!== undefined


        // if (getFromCart(item)) {
        //     return true;
        // }else {
        //     return false;
        // }
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