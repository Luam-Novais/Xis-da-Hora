import React, { useContext } from 'react';
import styles from '../styles/components/FeedbackModal.module.scss';
import '../styles/_variables.scss'
import { userContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
const FeedBackModal = ({status}) => {
  const { statusModal, setStatusModal, message } = useContext(userContext);
  const navigate = useNavigate()
  if (statusModal !== null) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  function handleClick() {
    setStatusModal(null);
    if(statusModal){
      navigate('/')
    }
  }

  return (
    <>
      {statusModal !==null && (
        <div className={styles.overlay}>
          <div style={{borderColor: status ? 'green' : 'red' }} className={styles.containerModal}>
            <p>{statusModal ? 'Usuário cadastrado com sucesso!' : message}</p>
            <button style={{backgroundColor: status ? 'green' : 'red'}} onClick={handleClick}>ok</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedBackModal;
