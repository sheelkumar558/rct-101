import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
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
    e.preventDefult();
    login();
  }
  return (
    <div
    onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        maxWidth: "200px",
        gap: "10px",
      }}
    >
      Login
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
    </div>
  );
};

export default Login;
