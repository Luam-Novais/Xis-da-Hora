import React, { useContext} from 'react'
import { userContext } from '../context/UserContext'
import { Navigate } from 'react-router-dom'

const RouteAuthorization = ({children}) => {
    const {isAuthorized} = useContext(userContext)
  return (
        <>{isAuthorized ? children : <Navigate to='/auth/login' replace/> }</>
  )
}

export default RouteAuthorization