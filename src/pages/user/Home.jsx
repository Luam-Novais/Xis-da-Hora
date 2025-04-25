import React from 'react';
import styles from '../../styles/pages/user/Home.module.scss';
import RegisterBurger from '../admin/RegisterBurger';

const Home = () => {
  return (


    <div className={styles.container}>
      <RegisterBurger/>
      {/* <span className={styles.hero}></span>
      <ul className={styles.content}>
        <h1>Novidades<span>.</span></h1>
        <li>
          <img src="/tropeiro.jpg" alt="" />
          <div>
            <h2>X-tudão</h2>
            <p>Pão, carne, queijo, alface e tomate</p>
            <p>
              <b>R$35,90</b>
            </p>
          </div>
        </li>
        <li>
          <img src="/tropeiro.jpg" alt="" />
          <div>
            <h2>X-tudão</h2>
            <p>Pão, carne, queijo, alface e tomate</p>
            <p>
              <b>R$35,90</b>
            </p>
          </div>
        </li>
      </ul> */}
    </div>
  );
};

export default Home;
