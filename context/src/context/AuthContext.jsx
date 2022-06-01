import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthrized, setIsAuthrized] = useState(false);

  const login = (username, password) => {
    if (username && password) {
      setIsAuthrized(true);
    }
  };
  const logout = () => {
    setIsAuthrized(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthrized, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
