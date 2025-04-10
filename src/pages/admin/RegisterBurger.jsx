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
            formData.append('image', media)
            formData.append('nome', nome.value)
            formData.append('ingredientes', ingredients)
            formData.append('valor', valor.value)
        }
        for(let pair of formData.entries()){
            console.log(pair[0] + ':', pair[1])
        }
    }
    return (
        <section className={styles.container}>
            <Title>Registrar Hamburger</Title>
            <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="image" className={styles.fileUpload}>
                        Selecionar Imagem <IoMdCloudUpload />
                        <input type='file' id='image' name='image' onChange={handleMedia}/>
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
                    <label htmlFor="descricao"> Ingredientes / Descrição</label>
                    <textarea id='descricao' name='descricao' value={ingredients} onChange={handleIngredients}/>
                </span>
                <Input type='number' name='valor' id='valor' label='Valor' {...valor}/>

                <Button>Registrar</Button>

            </form>

        </section>
    )
}

export default RegisterBurger
