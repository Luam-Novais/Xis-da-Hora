import React from 'react'
import styles from '../styles/components/Title.module.scss'

const Title = ({children}) => {

  return (
    <h1 className={`${styles.title} full-width`}>{children}</h1>
  )
}

export default Title