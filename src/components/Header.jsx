import React from 'react';
import styles from '../styles/components/Header.module.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.svg" alt="" />
      <nav>
        <ul>
          <li>
            <NavLink>Cardapio</NavLink>
          </li>
          <li>
            <NavLink>Carrinho</NavLink>
          </li>
          <li>
            <NavLink>Minha Conta</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
