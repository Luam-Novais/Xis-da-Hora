import React, { useEffect, useState } from 'react'
import styles from '../styles/components/MenuContent.module.scss'
import  Card from './Card'

const MenuContent = () => {

    return (
      <div className={styles.container}>
        <Card/>
      </div>
    )
}

export default MenuContent