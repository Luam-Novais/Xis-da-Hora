import React from 'react';
import styles from '../styles/components/ContainerAuth.module.scss';
import FeedbackModal from '../components/FeedbackModal';

const ContainerAuth = ({ children }) => {
  return (
    <section className={styles.containerAuth}>
      <FeedbackModal />
      {children}
    </section>
  );
};

export default ContainerAuth;
