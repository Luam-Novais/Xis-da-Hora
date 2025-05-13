import React, { useEffect, useMemo } from 'react';
import styles from '../../styles/pages/user/Home.module.scss';
import useFetch from '../../hooks/useFetch'
import {urlProd} from '../../utilities/urls'
import Loading from '../../components/common/Loading'


const Home = () => {
  const {request, data, loading, error} = useFetch()

  useEffect(()=>{
    request(`${urlProd}cardapio/burgers`)
  },[])

  const news = useMemo(()=> data ? data.slice(-2) : [], [data])

  return (
    <div className={styles.container}>
      <span className={styles.hero}></span>
      <ul className={styles.content}>
        <h1>
          Novidades<span>.</span>
        </h1>
        {
          loading ? <Loading/> :
          news.map((item) =>{
            return(
              <li key={item.id}>
                <img src={`${urlProd}uploads/${item.imagem}`} alt="" />
                <div>
                  <h2>{item.nome}</h2>
                <p>{item.ingredientes}</p>
                <p className={styles.valor}><b>R$ {item.valor}</b></p>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
};

export default Home;
