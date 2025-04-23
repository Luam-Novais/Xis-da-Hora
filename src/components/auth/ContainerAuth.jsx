import React from 'react';
import styles from '../../styles/components/auth/ContainerAuth.module.scss';
import FeedbackModal from '../modals/FeedbackModal';

const ContainerAuth = ({ children }) => {
  return (
    <section className={styles.containerAuth}>
      <FeedbackModal />
      {children}
    </section>
  );
};

export default ContainerAuth;
