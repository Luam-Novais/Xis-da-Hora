import React, { useEffect } from 'react'
import styles from '../../styles/pages/user/Cardapio.module.scss'
import { NavLink, Outlet, useParams } from 'react-router-dom'
import MenuContent from '../../components/layout/MenuContent'


const Cardapio = () => {
  const {id} = useParams()
  return (
    <section className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='/cardapio/burgers'>HAMBURGUERS</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='/cardapio/porcoes'>PORÇÕES</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='/cardapio/bebidas'>BEBIDAS</NavLink></li>
          <li><NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='/cardapio/sobremesas'>SOBREMESAS</NavLink></li>
        </ul>
      </nav> 
      <MenuContent/>
    </section>
  )
}

export default Cardapio