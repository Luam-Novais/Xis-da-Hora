import React from 'react'
import {Link} from 'react-router-dom'

const Unauthorized = () => {
  return (
    <div>Usuario não autorizado!
        <Link to='/auth/login'>Login</Link>
    </div>
  )
}

export default Unauthorized