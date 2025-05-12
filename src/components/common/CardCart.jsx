import React, { useContext, useEffect, useReducer, useState } from 'react';
import { FaMinus, FaPlus, FaTrashCan } from 'react-icons/fa6';
import {cartContext} from '../../context/CartContext'
import { urlProd } from '../../utilities/urls';
import styles from '../../styles/components/common/CardCart.module.scss';

function changeQuantity(finalQuantity, action) {
  switch (action) {
    case 'increment': {
      return finalQuantity + 1;
    }
    case 'decrement': {
      return finalQuantity > 1 ? finalQuantity - 1 : (finalQuantity = 1);
    }
  }
}

const CardCart = ({ id, nome, valor, quantity, src }) => {
  const [finalQuantity, dispatch] = useReducer(changeQuantity, quantity);
  const {carrinho, setCarrinho, removeItem} = useContext(cartContext)
  
  useEffect(()=>{
      const newCarrinho = carrinho.map((element) => {
          if (element.id === id) {
            return { ...element, quantity: finalQuantity };
          }
          return element;
        });
        setCarrinho([...newCarrinho]);
  }, [finalQuantity])
  return (
    <div className={styles.card} id={id}>
      <div className={styles.container}>
        <span className={styles.content}>
          <img src={`${urlProd}uploads/${src}`} alt={nome} />
          <span>
            <h2>{nome}</h2>
            <p>
              <b>R${valor}</b>
            </p>
          </span>
        </span>
        <span className={styles.containerButtons}>
          <span className={styles.quantityContainer}>
            <button onClick={() => dispatch('decrement')}>
              <i>
                <FaMinus />
              </i>
            </button>
            <p>
              Quantidade: <b>{finalQuantity}</b>
            </p>
            <button onClick={() => dispatch('increment')}>
              <i>
                <FaPlus />
              </i>
            </button>
          </span>
          <button className={styles.deleteBtn} onClick={()=> removeItem(id)}>
            <i>
              <FaTrashCan />
            </i>
          </button>
        </span>
        <p></p>
      </div>
    </div>
  );
};

export default CardCart;
