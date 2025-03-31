import React from 'react'
import { ContainerAuth } from '../components/Container/ContainerAuth'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <ContainerAuth>
        <Outlet/>
    </ContainerAuth>
  )
}

export default Auth