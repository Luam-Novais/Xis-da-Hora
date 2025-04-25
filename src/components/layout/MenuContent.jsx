import React, { useEffect, useState } from 'react'
import styles from '../../styles/components/layout/MenuContent.module.scss'
import  Card from '../common/Card'
import Loading from '../common/Loading'
import { useParams } from 'react-router-dom'
import { urlProd } from '../../utilities/urls'
import useFetch from '../../hooks/useFetch'

const MenuContent = () => {
  const {id} = useParams()
  const {data, request, loading, error} = useFetch()
  useEffect(()=>{
      request(urlProd + 'cardapio/' + id)
  },[id])
  if(loading){
    return <Loading/>
  }
  if(data){
    return (
      <div className={styles.container}>
        {data.map((hamburger) =>{
          return (
            <Card key={hamburger.id} src={hamburger.imagem} nome={hamburger.nome} ingredientes={hamburger.ingredientes}
            valor={hamburger.valor}/>
          )
        })}
      </div>
    )
  }
   
}

export default MenuContent