import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{
        display:'flex',
        padding:'30px',
        gap:'20px',
        fontSize:'20px',
    }}>
      <Link to='/'>Counter</Link>
      <Link to='/todos'>Todo App</Link>
    </div>
  )
}

export default Navbar
