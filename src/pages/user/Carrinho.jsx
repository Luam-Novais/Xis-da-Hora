import React, { useContext, useEffect, useState, useRef } from 'react';
import CardCart from '../../components/common/CardCart';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { FaMotorcycle } from 'react-icons/fa';
import Title from '../../components/common/Title';
import Button from '../../components/common/Button';
import styles from '../../styles/pages/user/Carrinho.module.scss';
import { cartContext } from '../../context/CartContext';
import { userContext } from '../../context/UserContext';
import { href } from 'react-router-dom';

const Carrinho = () => {
  const { carrinho, setCarrinho } = useContext(cartContext);
  const [subTotal, setSubTotal] = useState(0);
  const [message, setMessage] = useState(0);
  const linkRef = useRef(null)
  const { user } = useContext(userContext);

  useEffect(() => {
    const total = carrinho.reduce((acc, element) => {
      const finalTotal = Number(element.quantity * element.valor);
      const valorRedon = Number((acc += finalTotal).toFixed(2));
      return valorRedon;
    }, 0);

    setSubTotal(total);
  }, [carrinho]);

  function finalizeOrder(e) {
    if(carrinho.length > 0 && user){
      const items = carrinho.reduce((acc, element) => {
      const message = `
        ${element.quantity}x ${element.nome} (R$${element.valor})un  *R$${element.valor * element.quantity}*\n
      `;
      return (acc += message);
    }, '');

    const message = `
       Olá, gostaria de fazer um pedido! \n
       Nome: ${user.nome}\n
       Endereço de entrega : \n
       ${user.endereco} | ${user.cidade}
       Itens do o pedido: \n
       ${items}\n\n
       Total: *R$${subTotal}*\n
      

       *O PAGAMENTO SERÁ EFETUADO AO MOTOBOY NO ATO DA ENTREGA*
    `;

    setMessage(message)
    linkRef.current.setAttribute('href', `https://wa.me/5524998763577?text=${message}`)
    }else{
      alert('Efetue o login para terminar a compra.')
    }
  }

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
        <div className={styles.finalContainer}>
          {user && (
            <span>
              <h2>
                Endereço para entrega <FaMotorcycle />
              </h2>
              <p>{user.endereco}</p>
              <p className={styles.cidade}>
                {user.cidade} | {user.cep}
              </p>
            </span>
          )}
          <span className={styles.finalContent}>
            <p>
              Subtotal: <b>R${subTotal}</b>
            </p>
            <a ref={linkRef} target='blank' onClick={finalizeOrder}>
              Finalizar Pedido
            </a>
          </span>
        </div>
      </div>
    );
  }
};

export default Carrinho;
