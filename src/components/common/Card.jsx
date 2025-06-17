import React, { useContext, useReducer, useState } from 'react'
import {IoBagHandle} from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import styles from '../../styles/components/common/Card.module.scss'
import { urlProd, urlTest } from '../../utilities/urls';
import LazyImage from './LazyImage';
import { cartContext } from '../../context/CartContext';
import { userContext } from '../../context/UserContext';

function changeQuantity(quantity, action){
    switch(action){
        case 'increment':{
            return quantity + 1
        }
        case 'decrement':{
            if(quantity > 0){
                return quantity - 1
            }else{
                return quantity = 0
            }
        }
        default:{
            alert('Action inválida.')
        }
    }
}
const Card = ({id, src, nome, valor, ingredientes}) => {
    const {addToCart} = useContext(cartContext)
    const {user} = useContext(userContext)
    const [quantity, dispatch] = useReducer(changeQuantity, 0)
    const price = valor.toString().replace('.', ',')
    const url = `${urlProd}uploads/${src}`
    const item = {
        id,
        nome,
        valor,
        ingredientes,
        quantity,
        dispatch,
        src
    }
    function verifyToAddCart(item){
        if(user){
            addToCart(item)
        }else{
            alert('Para adicionar um item ao carrinho, efetue login primeiro.')
        }
    }
  return (
    <div className={styles.card}>
        <LazyImage src={url}/>
        <div className={styles.content} id={id}>
            <h2>{nome}</h2>
            <p>{ingredientes}</p>
            <p><b>R$ {price}</b></p>

            <div className={styles.buttonsContainer}>
                <span className={styles.quantityContainer}>
                    <button onClick={()=> dispatch('decrement')}><FaMinus/></button>
                    <p><b>{quantity}</b></p>
                    <button onClick={()=> dispatch('increment')}><FaPlus/></button>
                </span>
                <button className={styles.addButton} onClick={()=> verifyToAddCart(item)}>adicionar <i><IoBagHandle/></i></button>
            </div>

        </div>
    </div>
  )
}

export default React.memo(Card)