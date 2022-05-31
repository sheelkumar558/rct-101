import React, { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'

const Navbar = () => {
    const value = useContext(CartContext);
  return (
    <div>
        Cart : {value}
    </div>
  )
}

export default Navbar