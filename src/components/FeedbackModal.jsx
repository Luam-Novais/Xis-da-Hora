import React, { useContext } from 'react';
import styles from '../styles/components/FeedbackModal.module.scss';
import { userContext } from '../context/UserContext';
const FeedBackModal = () => {
  const { errorModal, setErrorModal, message } = useContext(userContext);
  if (errorModal) {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
  function handleClick() {
    setErrorModal(false);
  }

  return (
    <>
      {errorModal && (
        <div className={styles.overlay}>
          <div className={styles.containerModal}>
            <p>{message}</p>
            <button onClick={handleClick}>ok</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedBackModal; 