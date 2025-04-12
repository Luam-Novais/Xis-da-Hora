import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/layouts/PublicLayout.module.scss'
import { Outlet } from 'react-router-dom'

const PublicLayout = () => {
  return (
    <>
        <Header/>
        <main className={styles.container}>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default PublicLayout