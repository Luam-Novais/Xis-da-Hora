import React, { useContext } from 'react'
import { userContext } from '../../context/UserContext'

const MyAccount = () => {
  const {logout} = useContext(userContext)
  return (
    <div>MyAccount
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default MyAccount