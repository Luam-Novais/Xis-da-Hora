import React, {useContext} from 'react'
import { userContext } from '../../context/UserContext'
import { Navigate } from 'react-router-dom'

const AdminPrivateRoute = ({children}) => {
  const {user} = useContext(userContext)
  
  if(!user){
    return <Navigate to='/auth/login'/>
  }
  if(user && !user.admin){
    return <Navigate to='/unauthorized' replace/>
  }else{
    return(
      <>
        {children}
      </>
    )
  }
 
}

export default AdminPrivateRoute