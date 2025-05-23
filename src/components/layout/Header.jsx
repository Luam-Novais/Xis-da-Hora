import React, { useContext, useEffect, useState } from 'react';
import styles from '../../styles/components/layout/Header.module.scss';
import { NavLink, useParams } from 'react-router-dom';
import { IoHome, IoFastFood, IoBagHandle, IoPerson, IoLogIn } from 'react-icons/io5';
import useMedia from '../../hooks/useMedia';
import { userContext } from '../../context/UserContext';
import { cartContext } from '../../context/CartContext';


const Header = () => {
  const { id } = useParams();
  const categoryId = id || 'burgers';
  const mobile = useMedia('(max-width: 768px)');
  const { carrinho } = useContext(cartContext);
  const { isAuthorized, user } = useContext(userContext);
  let firstName;

  if (user) {
    firstName = user.nome.split(' ')[0];
  }
  const pedidos = carrinho.reduce((acc, element)=>{
    return acc += element.quantity
  }, 0)

  return (
    <header className={!mobile ? styles.header : styles.headerMobile}>
      {!mobile && (
        <NavLink to="/">
          <img className={styles.logo} src="/logo.svg" alt="logo do xis da hora" />
        </NavLink>
      )}
      <nav className={styles.navContainer}>
        <ul>
          {mobile && (
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? `${styles.active}` : '')}>
                <i>
                  <IoHome />
                </i>
              </NavLink>
            </li>
          )}
          <li>
            <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to={`cardapio/${categoryId}`}>
              {!mobile ? (
                'Cardapio'
              ) : (
                <i>
                  <IoFastFood />
                </i>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="carrinho">
              {!mobile ? (
                'Carrinho'
              ) : (
                <i>
                  <IoBagHandle />
                </i>
              )}
            </NavLink>
            {carrinho.length > 0 && <span className={styles.iconLength}>{pedidos}</span>}
          </li>
          <li>
            <NavLink className={({ isActive }) => (isActive ? `${styles.active}` : '')} to="minhaConta">
              {!mobile ? (
                isAuthorized ? (
                  firstName
                ) : (
                  <>
                    Entrar <IoLogIn />
                  </>
                )
              ) : (
                <i>{isAuthorized ? <IoPerson /> : <IoLogIn />}</i>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
