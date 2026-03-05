import React, { useContext, useReducer,createContext, } from "react";
import type { stateOfCartItems , reducerActions } from "./types"; 
import cartReducer, { initialState } from "./cartReducer";
import type { ReactNode } from "react";

const CartContext = createContext<stateOfCartItems|null>(null);
const cartDispatchContext = createContext<React.Dispatch<reducerActions> | null>(null);

export default function CartProvider({children}:{children: ReactNode}){
    const [state, Dispatch] = useReducer(cartReducer,initialState);
    return(
        <CartContext.Provider value={state}>
            <cartDispatchContext.Provider value={Dispatch}>
                {children}
            </cartDispatchContext.Provider>
        </CartContext.Provider>
    )
    
}

//Custom hooks
export function useCart(): stateOfCartItems{
    const value = useContext(CartContext);
    if(!value) throw new Error("Error with the cart")
    return value;
   
}

export function useCartDispatch(): React.Dispatch<reducerActions>{
   const value = useContext(cartDispatchContext);
    if(!value) throw new Error("Error with the cart")
    return value;
}
