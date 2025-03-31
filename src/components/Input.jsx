import React, { useState } from 'react'
import styles from '../styles/components/Input.module.scss'


const Input = ({label, type, name, id, className, onBlur, ...props}) => {
     

  return (
       <div className={`${styles.containerInput} ${className}`}>
            <label htmlFor={id}>{label}</label>
            <input 
               type={type} 
               name={name} 
               id={id}
               value={props.value}
               onChange={props.onChange}
               onBlur={onBlur}
               />
               <p className={styles.error}>{props.error && props.error}</p>
       </div> 
  )
}

export default Input
