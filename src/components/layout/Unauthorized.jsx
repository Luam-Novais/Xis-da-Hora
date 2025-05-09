import React from 'react'
import {Link} from 'react-router-dom'
import { FaLock } from "react-icons/fa";
import styles from '../../styles/components/layout/Unauthorized.module.scss'

const Unauthorized = () => {
  return (
    <div className={styles.container}>
        <h1>Ops! Essa parte do sistema é exclusiva para quem gerencia o cardápio.</h1>
        <p>Se você é administrador, verifique seu login ou entre em contato com o suporte.<i><FaLock/></i></p>
        <Link to='/minhaConta'>Login</Link>
    </div>
  )
}

export default Unauthorized