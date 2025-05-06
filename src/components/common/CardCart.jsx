import React from 'react'
import LazyImage from './LazyImage'
import { urlProd } from '../../utilities/urls'
import styles from '../../styles/components/common/CardCart.module.scss'

const CardCart = ({nome, valor, ingredientes, quantity, src}) => {

  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <h2>{nome}</h2>
        <p>{ingredientes}</p>
        <p>Quantidade: <b>{quantity}</b></p>
        <p><b>R${valor}</b></p>
      </div>
    </div>
  )
}

export default CardCart