import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styles from '../../styles/pages/user/MyAccount.module.scss'
import { IoLogOut, IoReceiptSharp } from "react-icons/io5";
import { userContext } from '../../context/UserContext'

const MyAccount = () => {
  const {logout, user} = useContext(userContext)
  console.log(user)
  return (
    <div className={styles.container}>
      <span className={styles.head}>
        <h1>Minha conta</h1>
        <button onClick={logout}>Sair <i><IoLogOut/></i></button>
      </span>
      <div className={styles.actions}>
        <button>Meus Pedidos <IoReceiptSharp/></button>
      </div>
      <div className={styles.content}>
        <span>
          <h2>Nome Completo:</h2>
          <p> {user.nome}</p>
        </span>
        <span>
          <h2>Email:</h2>
           {user.email}
        </span>
        <span>
          <h2>Telefone: </h2>
          <p>{user.telefone}</p>
        </span>
        <span>
          <h2>Endereços: </h2>
          <p>Cidade: {user.cidade}</p>
          <p>{user.endereco}</p>
          <p>Cep: {user.cep}</p>
        </span>
      </div>
      {user.admin && <Link to='/admin/functions'>admin</Link>}
    </div>
  )
}

export default MyAccount