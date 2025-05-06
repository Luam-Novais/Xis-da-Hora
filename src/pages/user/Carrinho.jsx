import React from 'react'
import CardCart from '../../components/common/CardCart'
import Title from '../../components/common/Title'
import styles from '../../styles/pages/user/Carrinho.module.scss'

const Carrinho = () => {
  const carrinho = JSON.parse(localStorage.getItem('carrinho'))

  if(carrinho && carrinho.length === 0){
    return <div className={styles.emptyCart}><p>Seu carrinho ainda está vazio. :/</p></div>
  }
 if(carrinho){
  return (
    <div className={styles.container}>
      <Title>Itens do pedido</Title>
      {carrinho.map((item)=>{
        return(
          <CardCart key={item.id} id={item.id} quantity={item.quantity}nome={item.nome} valor={item.valor} src={item.src} ingredientes={item.ingredientes}/>
        )
      })}
    </div>
  )
 }
}

export default Carrinho