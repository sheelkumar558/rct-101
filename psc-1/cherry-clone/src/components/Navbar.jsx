import React from "react";
import logo from "../assets/logo.svg";
const Navbar = (props) => {
  const navbarOtions = [
    {
      iconName: "person_outline",
      lebal: "Sign In",
    },
    {
      iconName: "shopping_bag",
      lebal: "Cart",
    },
    {
      iconName: "support",
      lebal: "Help",
    },
    {
      iconName: "search",
      lebal: "Search",
    },
  ];
  return (
    <div>
      <section className="navbar">
        <div className="container">
          <img className="logo" src={logo} />
          <div className="location">
            <span className="city">{props.city}</span>
            <span className="state">
              {props.state}, {props.country}
            </span>
          </div>
          <div className="navbar-options">
            {navbarOtions.map((navbarOtion) => (
              <div key={navbarOtion.iconName} className="navbar-option">
                <span className="material-icons"> {navbarOtion.iconName}</span>{" "}
                {navbarOtion.lebal}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
