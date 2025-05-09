import React from 'react';
import styles from '../../styles/pages/user/Home.module.scss';
import RegisterBurger from '../admin/RegisterBurger';

const Home = () => {
  
  return (


    <div className={styles.container}>
      <span className={styles.hero}></span>
      <ul className={styles.content}>
        <h1>Novidades<span>.</span></h1>
      </ul>
    </div>
  );
};

export default Home;
