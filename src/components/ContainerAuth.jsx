import React, { useContext } from 'react';
import styles from '../styles/components/ContainerAuth.module.scss';
import FeedbackModal from '../components/FeedbackModal';
import { userContext } from '../context/UserContext';

const ContainerAuth = ({ children }) => {
  const {statusModal} = useContext(userContext)
  return (
    <section className={styles.containerAuth}>
      <FeedbackModal  status={statusModal}/>
      {children}
    </section>
  );
};

export default ContainerAuth;
