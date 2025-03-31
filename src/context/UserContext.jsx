import React, { createContext, useEffect, useState} from 'react'
import { TOKEN_POST, USER_GET } from '../utilities/api'
import { useNavigate } from 'react-router-dom'
export const userContext = createContext()

export const UserStorage = ({children}) => {

  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(null)

  const userLogin = async (formData)=>{
    const {url, options} = TOKEN_POST('/auth/login', formData)
    setLoading(true)
    try{
        const response = await fetch(url, options)
        const data = await response.json()
        
        if(response.ok){
          window.localStorage.setItem('token', data.token)
          setUser(data.user.nome)
          navigate('/')
        }
        else {
          throw new Error(data.message);
        }
     }
     catch(err){
        alert('Ocorreu um erro! ' + err)
     }
     finally{
        setLoading(false)
     }
  }
  const userCreate = async (formData)=>{
    const {url, options} = TOKEN_POST('/auth/registrar',formData)
    try{
      const response = await fetch(url, options)
      const data = await response.json()
    
      if(response.ok){
          window.localStorage.setItem('token', data.token)
          setUser(data.user.nome)
          navigate('/')
      }
    }catch(err){
      console.log(err);
    }
    
  }
  // const verificarToken = async (token)=>{
  //     const {url, options} = USER_GET('/auth/me', token)
  //     const response = await fetch(url, options)
  //     const data = await response.json()

  //     setUser(data.nome)
  //     console.log(data)
  // }
  // useEffect(()=>{
  //   const token = window.localStorage.getItem('token')
  //   if(token){
  //     verificarToken(token)
  //   }else{
  //     console.log('nada com nada')
  //   }
  // },[])
  return (
      <userContext.Provider value={{user, setUser, userLogin, userCreate, loading}}>
        {children}
      </userContext.Provider>
  )
}

