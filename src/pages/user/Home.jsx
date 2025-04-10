import React from 'react'
import styles from '../../styles/pages/user/Home.module.scss'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className={styles.hero} >
        <div>
            <h1>
                PORQUE A FOME <br/>
                NÃO TEM HORA!
            </h1>
            <Link to='cardapio'><Button>Fazer Pedido</Button></Link>
        </div>
        <img src="/burger-home.png" alt="" />
    </section>
  )
}

export default Home