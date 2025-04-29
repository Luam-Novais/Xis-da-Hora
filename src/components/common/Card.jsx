import React, { useReducer } from 'react'
import {IoBagHandle} from "react-icons/io5";
import { FaMinus, FaPlus } from "react-icons/fa6";
import styles from '../../styles/components/common/Card.module.scss'
import { urlProd } from '../../utilities/urls';
import LazyImage from './LazyImage';

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
const Card = ({src, nome, valor, ingredientes}) => {
    const [quantity, dispatch] = useReducer(changeQuantity, 0)
    const price = valor.toString().replace('.', ',')

  return (
    <div className={styles.card}>
        <LazyImage src={`${urlProd}uploads/${src}`}/>
        <div className={styles.content}>
            <h2>{nome}</h2>
            <p>{ingredientes}</p>
            <p><b>R$ {price}</b></p>

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