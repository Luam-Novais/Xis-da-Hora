import React from 'react'
import styles from '../styles/components/ContainerAuth.module.scss'
import FeedBackModal from './FeedBackModal'

const ContainerAuth = ({children}) => {
  return (
    <section className={styles.containerAuth}>
      <FeedBackModal/>
      {children}
    </section>
  )
}

export default ContainerAuth