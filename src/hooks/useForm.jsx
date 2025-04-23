import {React, useState} from 'react'

const types = {
  email:{
    regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    message: 'Por favor, insira um email válido!'
  },
  senha: {
     regex: /^(?=.*[A-Za-z])(?=.*\d)[^\s]{8,}$/,
     message: 'A senha deve conter letars e números e no mínimo 8 caracteres.'
  },
  cep:{
    regex: /^\d{5}-?\d{3}$/,
    message: 'Por favor, insira um cep válido!'
  },
  telefone:{
    regex: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
    message: 'Por favor, insira um número de telefone válido!'
  }
}

const useForm = (type) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState(null)

  function validate(value){
    if(value.length === 0){
      setError('Insira um valor.')
      return false
    }
    else if(types[type] && !types[type].regex.test(value)){
      setError(types[type].message)
      return false
    }
    else{
      setError(null)
      return true
    }
  }


  function handleChange({target}){
    setValue(target.value)
    if(error)validate(target.value)
  }
  return {
    value,
    setValue,
    onChange: handleChange,
    onBlur: ()=> validate(value),
    validate: ()=> validate(value),
    error
  }
}

export default useForm