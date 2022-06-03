import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="product/:id">Product</Link>
    </div>
  )
}

export default Navbar