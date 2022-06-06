import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';


const Navbar = () => {
  const {isAuth,logout} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLoginClick = () =>{
   if(isAuth){
     logout();
     navigate("/");
   }else{
    navigate('/login');
   }
   
  };
  
  return (
    <div style={{ padding: "10px", display: "flex", gap: "20px" }}>
      Navbar :
      <Link data-cy="navbar-home-link" to="">
        Home
      </Link>
      <span data-cy="navbar-cart-items-count">{/* count here */}</span>
      <button data-cy="navbar-login-logout-button" onClick={handleLoginClick}>
        {isAuth ? "Logout" : "Login"}
      </button>
    </div>
  );
};

export default Navbar;
