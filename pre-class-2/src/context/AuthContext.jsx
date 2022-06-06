import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthContextProvider =({children})=>{
    const [isAuth,setIsAuth] = useState(false);
    const handleSignIn =({username,password})=>{
       if(username === "admin" && password === "admin"){
           setIsAuth(true);
       }else{
           alert("wrong password");
       }
    }
    
    const handleSingOut =()=>{
        setIsAuth(false);
    }
  
    const value = {isAuth,handleSignIn,handleSingOut};
    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}