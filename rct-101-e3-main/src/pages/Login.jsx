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
      data-cy="login-email" 
      name="email"
      type="text"
      placeholder="email"
      onChange={handleChenge}
      />
      <input
       data-cy="login-password" 
       name="password"
       type="password"
       placeholder="Enter password..."
       onChange={handleChenge}
       />
      <button data-cy="login-submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
