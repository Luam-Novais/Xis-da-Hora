import React, { useContext } from 'react';
import styles from '../../styles/components/modals/OrderReviewSidebar.module.scss';
import { cartContext } from '../../context/CartContext';
import { FaPencilAlt } from "react-icons/fa";
import { userContext } from '../../context/UserContext';

const OrderReviewSidebar = ({ href, setModal, modal, finalizeOrder, subTotal, }) => {
  const { carrinho } = useContext(cartContext);
  const {user} = useContext(userContext)

  if(carrinho && user){
    return (
    <aside className={`${modal ? styles.openModal : styles.closeModal} ${styles.container}`}>
      <h1>Revisar Pedido</h1>
      <ul className={styles.items}>
        <h2>Itens do pedido</h2>
        {carrinho.map((item) => {
          return (
            <li>
              <h3>
                {item.quantity}x - {item.nome}
              </h3>
              <p><b>R${item.valor}un</b></p>
            </li>
          );
        })}
      </ul>
      <div className={styles.address}>
        <h3>Endereço de entrega:</h3>
        <p>{user.endereco} | {user.cidade}</p>
      </div>
      <div className={styles.finalContent}>
        <h3>R$ Subtotal: {subTotal}</h3>
        <span>
            <button onClick={()=> setModal(false)}>Editar <i><FaPencilAlt/></i></button>
            <a href={href} target= '_blank'onClick={finalizeOrder}>Finalizar Pedido</a>
        </span>
      </div>
    </aside>
  );
  }
};

export default OrderReviewSidebar;
