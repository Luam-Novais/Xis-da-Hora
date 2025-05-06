import React, { createContext, useEffect, useState } from 'react'
export const cartContext = createContext()

const CartStorage = ({children}) => {
  const [status, setStatus] = useState({ visible: false, state:null, message: ""})
  const [carrinho, setCarrinho] = useState(()=>{
    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho'))
    if(carrinhoLocal){
      return carrinhoLocal
    }
    return []
  })
  console.log(status)

  const addToCart = (item)=>{
    if(item && item.quantity > 0){
      setCarrinho([item, ...carrinho])
      setStatus({visible: true, state: true, message: 'Item adicionado ao carrinho.'})   
    }else{
      setStatus({visible: true, state: false, message: 'Adicione a quantidade desejada.'})
    }
  }
  if(status.visible){
    setTimeout(()=>{
      setStatus({ visible: false, state:null, message: ""})
    }, 3000)  
  }
  useEffect(()=>{
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
  }, [carrinho])
  return (
     <cartContext.Provider value={{addToCart, carrinho, status}}>
      {children}
     </cartContext.Provider>
  )
}

export default CartStorage