import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  const login = () => {
    setIsAuth(true);
    navigate("/feeds");
  };

  const logout = () => {
    setIsAuth(false);
    navigate("/");
  };
  //const params = { isAuth, login, logout };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
