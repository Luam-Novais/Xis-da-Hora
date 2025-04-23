import React from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
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