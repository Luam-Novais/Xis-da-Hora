import React from 'react';
import styles from '../../styles/components/auth/ContainerAuth.module.scss';
const ContainerAuth = ({ children }) => {

  return (
    <section className={styles.containerAuth}>
      {children}
    </section>
  );
};

export default ContainerAuth;
