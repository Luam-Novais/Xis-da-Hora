import React, { useEffect, useContext } from 'react';
import styles from '../../styles/components/layout/MenuContent.module.scss';
import Messages from '../modals/Messages';
import Card from '../common/Card';
import Loading from '../common/Loading';
import { useParams } from 'react-router-dom';
import { urlProd } from '../../utilities/urls';
import useFetch from '../../hooks/useFetch';
import { FaGear } from 'react-icons/fa6';
import {cartContext} from '../../context/CartContext'
 
const MenuContent = () => {
  const { id } = useParams();
  const {status} = useContext(cartContext)
  const { data, request, loading, error } = useFetch();
  useEffect(() => {
    request(urlProd + 'cardapio/' + id);
  }, [id]);
  console.log(data)
  if (loading) {
    return <Loading />;
  }
  if (data && data.length === 0) {
    return (
      <>
        <span className={styles.containerError}>
          <p>Ainda não temos nada por aqui, mas vem novidade quentinha a qualquer momento!</p>
        </span>
      </>
    );
  }
  if (error) {
    return (
      <span className={styles.containerError}>
        <p>Ops! Parece que a conexão com nossa cozinha falhou.</p>
        <p>
          Estamos trabalhando nisso...{' '}
          <i>
            <FaGear />
          </i>
        </p>
      </span>
    );
  }
  if (data) {
    return (
      <>
        <div className={styles.container}>
          <Messages status={status}/>
          {data.map((hamburger) => {
            return <Card key={hamburger.id} id={hamburger.id} src={hamburger.imagem} nome={hamburger.nome} ingredientes={hamburger.ingredientes} valor={hamburger.valor} />;
          })}
        </div>
      </>
    );
  }
};

export default MenuContent;
