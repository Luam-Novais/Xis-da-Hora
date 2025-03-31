import React from 'react'
import styles from '../styles/components/FormContainer.m'
import styled from 'styled-components'

const FormContainer = ({onSubmit, children}) => {
  return (
    <form className={styles.formContainer}onSubmit={onSubmit}>
        {children}
    </form>
  )
}

export default FormContainer

export const FormStyled = styled.form`

     

`;