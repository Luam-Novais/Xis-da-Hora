import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { userContext } from '../../context/UserContext'

const MyAccount = () => {
  const {logout} = useContext(userContext)
  return (
    <div>MyAccount
      <Link to='/admin/functions'>admin</Link>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default MyAccount