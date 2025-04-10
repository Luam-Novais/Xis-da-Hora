import React from 'react'
import styles from '../styles/components/ContainerAuth.module.scss'

const ContainerAuth = ({children}) => {
  return (
    <main className={styles.container}>{children}</main>
  )
}

export default ContainerAuth