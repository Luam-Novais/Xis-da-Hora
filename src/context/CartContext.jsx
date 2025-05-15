import React, { createContext, useCallback, useEffect, useState } from 'react';
export const cartContext = createContext();

const CartStorage = ({ children }) => {
  const [status, setStatus] = useState({ visible: false, state: null, message: '' });
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoLocal = JSON.parse(localStorage.getItem('carrinho'));
    if (carrinhoLocal) {
      return carrinhoLocal;
    }
    return [];
  });

  const addToCart = (item) => {
    if (item && item.quantity > 0) {
      if(carrinho.some((element) => element.nome === item.nome)) {
        const newCarrinho = carrinho.map((element)=>{
          if(element.id === item.id){
            return {...element, quantity: element.quantity + item.quantity}
          }
          return element
        })
        setCarrinho([...newCarrinho])
      } else {
        setCarrinho([item, ...carrinho]);
      }
      setStatus({ visible: true, state: true, message: 'Item adicionado ao carrinho.' });
    } else {
      setStatus({ visible: true, state: false, message: 'Adicione a quantidade desejada.' });
    }
  };

  const removeItem = useCallback(
    (nome) => {
      const newCarrinho = carrinho.filter((item) => item.nome !== nome);
      setCarrinho([...newCarrinho]);
    },
    [carrinho],
  );

  if (status.visible) {
    setTimeout(() => {
      setStatus({ visible: false, state: null, message: '' });
    }, 3000);
  }
  useEffect(() => {
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
  }, [carrinho]);
  return <cartContext.Provider value={{ addToCart, carrinho, setCarrinho, status, removeItem }}>{children}</cartContext.Provider>;
};

export default CartStorage;
