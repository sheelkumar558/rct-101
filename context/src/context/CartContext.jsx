import { createContext, useState,useContext } from "react";
import { AuthContext } from "./AuthContext";


export const CartContext = createContext();
export const CartProvider = ({children})=>{
    const { isAuthrized } =useContext(AuthContext);
    const [count,setCount] = useState(0);
    const addToCart =()=>{
        setCount(count+1);
    }

   const buy=()=>{
        if(isAuthrized){
            console.log("can buy");
        }else{
            console.log("connot buy without loggin in");
        }
   }

    return <CartContext.Provider value={{count,addToCart,buy}}>{children}</CartContext.Provider>
}