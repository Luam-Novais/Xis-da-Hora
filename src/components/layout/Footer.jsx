import React from 'react'
import styles from '../../styles/components/layout/Footer.module.scss'
import { IoLogoWhatsapp, IoLogoInstagram, IoLogoFacebook} from "react-icons/io";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#"><img src="/logo.svg" alt="" /></a>
        <p> Todos os direitos reservados&copy;. 2025 Xis da Hora.</p>
        <div>
          <h2>Redes Sociais</h2>
          <ul>
            <li><a href=""><IoLogoWhatsapp/></a></li>
            <li><a href=""><IoLogoInstagram/></a></li>
            <li><a href=""></a><IoLogoFacebook/></li>
          </ul>
        </div>
    </footer>
  )
}

export default Footer