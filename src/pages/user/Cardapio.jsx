import React, { useEffect } from 'react'
import styles from '../../styles/pages/user/Cardapio.module.scss'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import MenuContent from '../../components/MenuContent'

const Cardapio = () => {
  const {id} = useParams()
  return (
    <section className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='/cardapio/burgers'>hamburguer</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='/cardapio/porcoes'>porções</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='/cardapio/bebidas'>bebidas</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='/cardapio/sobremesas'>sobremesas</NavLink></li>
        </ul>
      </nav> 
      <MenuContent/>
    </section>
  )
}

export default Cardapio