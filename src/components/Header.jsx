import React from 'react';
import styles from '../styles/components/Header.module.scss';
import { NavLink } from 'react-router-dom';
import { IoHome, IoFastFood, IoBagHandle, IoPerson} from "react-icons/io5";
import useMedia from '../hooks/useMedia';

const Header = () => {
  const mobile = useMedia('(max-width: 768px)')

  return (
    <header className={!mobile ? styles.header : styles.headerMobile}>
      {!mobile && <NavLink to='/' ><img className={styles.logo} src="/logo.svg" alt="logo do xis da hora" /></NavLink>}
      <nav className={styles.navContainer}>
        <ul>
          {mobile && <li> <NavLink to='/'><i><IoHome/></i></NavLink></li>}
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.active}` : ''} to='cardapio'>
              {!mobile ? 'Cardapio' :<i><IoFastFood/></i> }
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.active}` : ''}  to='carrinho'>
              {!mobile ? 'Carrinho' :<i><IoBagHandle/></i> }
            </NavLink>
          </li>
          <li>
            <NavLink className={({isActive}) => isActive ? `${styles.active}` : ''}  to='minhaConta'>
              {!mobile ? 'Minha Conta' :<i><IoPerson/></i> }
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
