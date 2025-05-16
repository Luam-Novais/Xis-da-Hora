import React, { useContext, useEffect, useState, useRef } from 'react';
import CardCart from '../../components/common/CardCart';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { FaMotorcycle } from 'react-icons/fa';
import Title from '../../components/common/Title';
import styles from '../../styles/pages/user/Carrinho.module.scss';
import { cartContext } from '../../context/CartContext';
import { userContext } from '../../context/UserContext';
import OrderReviewSidebar from '../../components/modals/OrderReviewSidebar';

const Carrinho = () => {
  const { carrinho, setCarrinho } = useContext(cartContext);
  const [subTotal, setSubTotal] = useState(0);
  const [whatsUrl, setWhatsUrl] = useState('');
  const [modal, setModal] = useState(false)
  const { user } = useContext(userContext);

  useEffect(() => {
    const total = carrinho.reduce((acc, element) => {
      const finalTotal = Number(element.quantity * element.valor);
      const valorRedon = Number((acc += finalTotal).toFixed(2));
      return valorRedon;
    }, 0);

    setSubTotal(total);
  }, [carrinho]);

  function finalizeOrder() {
    if (carrinho.length > 0 && user) {
      const items = carrinho
        .map((item) => {
          return ` •${item.quantity}x ${item.nome} (R$${item.valor}un) - *R$${item.valor * item.quantity}*`;
        })
        .join('\n');

      const message = `*Olá, gostaria de fazer um pedido!*\n\n` + `*Nome:* ${user.nome}\n` + `*Endereço de entrega:* ${user.endereco} | ${user.cidade}\n\n\n` + `*Itens do pedido:* \n` + `${items}\n\n` + `*Total: R$${subTotal}*\n\n` + `______\n\n` + `💰🏍️ *O PAGAMENTO SERÁ EFETUADO AO MOTOBOY NO ATO DA ENTREGA* 🏍️💰`;
      
      setWhatsUrl(`https://wa.me/5524998763577?text=${encodeURIComponent(message)}`)
      setModal(false)
    } else {
      alert('Efetue o login para terminar a compra.');
    }
  }

  if (carrinho && carrinho.length === 0) {
    return (
      <div className={styles.emptyCart}>
        <p>Seu carrinho ainda está vazio.</p>
        <MdRemoveShoppingCart/>
      </div>
    );
  }
  if (carrinho) {
    return (
      <div className={styles.container}>
        <OrderReviewSidebar modal={modal} setModal={setModal} finalizeOrder={finalizeOrder}subTotal={subTotal} href={whatsUrl}/>
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
            <button className={styles.finishOrder}onClick={()=> setModal(true)}>
              Finalizar Pedido
            </button>
          </span>
        </div>
      </div>
    );
  }
};

export default Carrinho;
