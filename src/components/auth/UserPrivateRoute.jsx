import React, { useContext} from 'react'
import { userContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'

const UserPrivateRoute = ({children}) => {
    const {user} = useContext(userContext)

    if(!user){
      return(
        <Navigate to='/auth/login' replace/>
      )
    }

    return(
      <>
        {children}
      </>
    )
}

export default UserPrivateRoute