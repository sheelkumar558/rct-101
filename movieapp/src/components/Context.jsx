import { useContext } from "react";
import { createContext } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  return <AppContext.Provider value="sheelu">{children}</AppContext.Provider>;
};

export const useGlobalContext =()=>{
   return useContext(AppContext);
}; 
