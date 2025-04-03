import React from 'react'
import useForm from '../../hooks/useForm'
import Input from '../../components/Input'
import { data } from 'react-router-dom'

const RegisterBurger = () => {
    const nome = useForm('nome')
    const ingredientes = useForm('ingredientes')
    const valor = useForm('valor')

    async function handleSubmit(e){
        e.preventDefault()
        const formData = {
            nome: nome.value,
            ingredientes: ingredientes.value,
            valor: valor.value
        }
        const response = await fetch('http://26.235.226.168:3001/hamburguers', {
            method:"POST",
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(formData)
        })
        const data = await response.json()
        console.log(response, data)

    }

  return (
    <div>
        <main>
        <h1>Administrador</h1>
        <section >
        <h2>Adicionar novo hambúrguer</h2>
        <div>
            <button id="botaoAddLanche">+</button>
        </div>
    </section>
    </main>
    <section >
    <div>
        <h3>Adicionar</h3>
        <form onSubmit={handleSubmit}>
            <Input type='file' label='imagem' name='imagem' id= 'imagem'/>
            <Input type='text' label='Nome' name='nome' id='nome' {...nome}/>
            <Input type='text' label='ingredientes' name='ingredientes' id='ingredientes' {...ingredientes}/>
            <Input type="number" name="valor" id="valor" {...valor}/>
            <button type="submit" >Adicionar</button>
        </form>
    </div>
</section>
</div>
  )
}

export default RegisterBurger
