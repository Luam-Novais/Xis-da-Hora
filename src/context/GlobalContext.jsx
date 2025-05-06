import React from 'react'
import UserStorage from './UserContext'
import CartStorage from './CartContext'

const GlobalContext = ({children}) => {
  return (
    <UserStorage>
      <CartStorage>
        {children}
      </CartStorage>
    </UserStorage>
  )
}

export default GlobalContext