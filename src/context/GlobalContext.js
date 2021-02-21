import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [cart, setCart] = useState([{id:1, name:"lucho", price: "900,000"},])

    return <GlobalContext.Provider value={{cart, setCart}}>
        {children}
    </GlobalContext.Provider>
}