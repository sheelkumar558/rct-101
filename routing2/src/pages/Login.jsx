import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [loginCreds, setLoginCreds] = useState({});
  const {login} = useContext(AuthContext);
  const handleChenge = (e) => {
    const { name, value } = e.target;
    setLoginCreds({
      ...loginCreds,
      [name]: value,
    });
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    login();
    navigate("/feeds");
  }
  return (
    <div>
      Login
    
    <form
    onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        maxWidth: "200px",
        gap: "10px",
      }}
    >
      
      <input
        name="email"
        type="text"
        placeholder="email"
        onChange={handleChenge}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter password..."
        onChange={handleChenge}
      />
      <button type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
