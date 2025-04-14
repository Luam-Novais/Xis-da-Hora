import React from 'react'
import styles from '../styles/components/ContainerAuth.module.scss'

const ContainerAuth = ({children}) => {
  return (
    <section className={styles.container}>
      {children}
    </section>
  )
}

export default ContainerAuth