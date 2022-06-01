import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { ThemeContext } from "../context/ThemeContext";
import WishList from "./WishList";

const Navbar = () => {
  const { isAuthrized, login, logout } = useContext(AuthContext);
  const { buy } = useContext(CartContext);
  const { isLight, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      Navbar
      <button
        onClick={() => {
          if (isAuthrized) logout();
          else login("R", "Z");
        }}
      >
        {isAuthrized ? "logout" : "login"}
      </button>
      <button onClick={buy}>Buy</button>
      <button onClick={toggleTheme}>{`Make ${
        isLight ? "Dark" : "Light"
      }`}</button>
      {isAuthrized && <WishList />}
    </div>
  );
};

export default Navbar;
