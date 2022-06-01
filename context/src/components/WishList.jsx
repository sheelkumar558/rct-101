import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const WishList = () => {
    const {count} = useContext(CartContext);
  return (
    <div>
      wishlist : {count}
    </div>
  )
}

export default WishList
