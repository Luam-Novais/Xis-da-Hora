import React, { useReducer } from 'react'
import {IoBagHandle} from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import styles from '../styles/components/Card.module.scss'

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
const Card = () => {
    const [quantity, dispatch] = useReducer(changeQuantity, 0)
  return (
    <div className={styles.card}>
        <img src="/tropeiro.jpg" alt="" />
        <div className={styles.content}>
            <h2>X-tudão</h2>
            <p>Pão, carne, queijo, alface e tomate</p>
            <p><b>R$35,90</b></p>

            <div className={styles.buttonsContainer}>
                <span className={styles.quantityContainer}>
                    <button onClick={()=> dispatch('decrement')}><FaMinus/></button>
                    <p>{quantity}</p>
                    <button onClick={()=> dispatch('increment')}><FaPlus/></button>
                </span>
                <button className={styles.addButton}>adicionar <i><IoBagHandle/></i></button>
            </div>

        </div>
    </div>
  )
}

export default React.memo(Card)