import React from 'react'
import styles from '../styles/components/Button.module.scss'


const Button = ({children, className}) => {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  )
}

export default Button