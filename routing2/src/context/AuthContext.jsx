import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const login = () => {
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
  };
  //const params = { isAuth, login, logout };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
