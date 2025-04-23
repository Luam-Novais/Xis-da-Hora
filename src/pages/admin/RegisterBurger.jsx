import React, { useState } from 'react'
import { IoMdCloudUpload } from "react-icons/io";
import Title from '../../components/Title'
import Input from '../../components/Input'
import Button from '../../components/Button'
import styles from '../../styles/pages/admin/RegisterBurger.module.scss'
import useForm from '../../hooks/useForm'

const RegisterBurger = () => {
    const nome = useForm('nome')
    const valor = useForm('valor')
    const [ingredients, setIngredients] = useState('') 
    const [media, setMedia] = useState(null)
    const [previewImg, setPreviewImg] = useState(null)

    function handleIngredients({target}){
        setIngredients(target.value)
    }

    function handleMedia({target}){
       const file = target.files[0]
       if(file){
            setPreviewImg(URL.createObjectURL(file))
            setMedia(file)
       }else{
            setPreviewImg(null)
       }
    }
    
    async function handleSubmit(event){
        event.preventDefault()
        const formData = new FormData()
        if(
            media && 
            nome.value && 
            ingredients &&
            valor.value
        ){
            formData.append('imagem', media)
            formData.append('nome', nome.value)
            formData.append('ingredientes', ingredients)
            formData.append('valor', valor.value)
        }
        
        console.log([...formData.entries()])
        const response = await fetch('http://26.252.150.176:3001/hamburguers', {
            method: 'POST',
            body: formData
        })

        console.log(response)
    }
    return (
        <section className={styles.container}>
            <Title>Registrar Hamburger</Title>
            <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="imagem" className={styles.fileUpload}>
                        Selecionar Imagem <IoMdCloudUpload />
                        <input type='file' id='imagem' name='imagem' onChange={handleMedia}/>
                    </label>
                {
                    previewImg ? 
                    <picture className={styles.containerImg}>
                        {previewImg && 
                            <span>
                                <img src={previewImg} alt="" />
                            </span>}
                    </picture> : 
                    <p>Selecione um arquivo.</p>
                }
                <Input type='text' name='nome' id='nome' label='Nome do alimento' {...nome}/>
                <span>
                    <label htmlFor="ingredinetes"> Ingredientes / Descrição</label>
                    <textarea id='ingredinetes' name='ingredinetes' value={ingredients} onChange={handleIngredients}/>
                </span>
                <Input type='text' name='valor' id='valor' label='Valor' {...valor}/>

                <Button>Registrar</Button>

            </form>

        </section>
    )
}

export default RegisterBurger
