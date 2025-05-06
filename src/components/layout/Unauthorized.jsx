import React from 'react'
import {Link} from 'react-router-dom'
import { FaLock } from "react-icons/fa";

const Unauthorized = () => {
  return (
    <div>
        <h3>Ops! Essa parte do sistema é exclusiva para quem gerencia o cardápio.</h3>
        <p>Se você é administrador, verifique seu login ou entre em contato com o suporte. <i><FaLock/></i></p>
        <Link to='/auth/login'>Login</Link>
    </div>
  )
}

export default Unauthorized