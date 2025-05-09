import React, { useContext, useEffect } from 'react';
import { FaCheck } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import styles from '../../styles/components/modals/MessageCart.module.scss'
import { cartContext } from '../../context/CartContext';

const MessageCart = () => {
  const { status } = useContext(cartContext);

  useEffect(() => {
    console.log(status);
  }, [status]);
  if (status.visible) {
    return (
      <div 
      className={`${styles.container}`} 
      style={{backgroundColor: status.state ? 'green': 'red'}}>
        {status.message}
        <i className={status.state ? styles.sucess : styles.error}>{status.state ? <FaCheck /> : <FaTimes />}</i>
      </div>
    );
  }
};

export default MessageCart;
