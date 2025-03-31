import React from 'react'
import ContainerAuth from '../components/ContainerAuth'
import { Outlet } from 'react-router-dom'

const Auth = () => {
  return (
    <ContainerAuth>
        <Outlet/>
    </ContainerAuth>
  )
}

export default Auth