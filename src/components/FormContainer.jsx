import React from 'react'
import styles from '../styles/components/FormContainer.module.scss'

const FormContainer = ({onSubmit, children}) => {
  return (
    <form className={styles.formContainer}onSubmit={onSubmit}>
        {children}
    </form>
  )
}

export default FormContainer