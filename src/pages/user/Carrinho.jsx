import React, { useContext, useEffect, useState } from 'react';
import CardCart from '../../components/common/CardCart';
import { MdRemoveShoppingCart } from 'react-icons/md';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import styles from '../../styles/pages/user/Carrinho.module.scss';
import { cartContext } from '../../context/CartContext';

const Carrinho = () => {
  const { carrinho, setCarrinho } = useContext(cartContext);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    const total = carrinho.reduce((acc, element) => {
      const finalTotal = Number(element.quantity * element.valor);
      const valorRedon = Number((acc += finalTotal).toFixed(2));
      return valorRedon;
    }, 0);

    setSubTotal(total);
  }, [carrinho]);

  if (carrinho && carrinho.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <p>Seu carrinho ainda está vazio.</p>
        <MdRemoveShoppingCart />
      </div>
    );
  }
  if (carrinho) {
    return (
      <div className={styles.container}>
        <div>
          <Title>Itens do pedido</Title>
          {carrinho.map((item) => {
            return <CardCart key={item.id} id={item.id} quantity={item.quantity} nome={item.nome} valor={item.valor} src={item.src} ingredientes={item.ingredientes} />;
          })}
        </div>
        <div className={styles.finalContent}>
          <p>
            Subtotal: <b>R${subTotal}</b>
          </p>
          <Button>Finalizar Pedido</Button>
        </div>
      </div>
    );
  }
};

export default Carrinho;
