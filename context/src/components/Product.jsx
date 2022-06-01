import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

import Cart from './Cart'

const Product = () => {
    const { isAuthrized } =useContext(AuthContext);

  return (
    <div>
        Product : {isAuthrized ? "LoggedIn" : "LoggedOut"}
        <Cart/>
    </div>
  )
}

export default Product