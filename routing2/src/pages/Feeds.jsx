import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'

const Feeds = () => {
  const navigate = useNavigate();
  const {isAuth} = useContext(AuthContext);

  if(isAuth){
    return <div>feeds</div>
  }else{
     navigate("/login");
  }
  
}

export default Feeds