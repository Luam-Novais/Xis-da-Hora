import React, { useState } from 'react';
import { IoMdCloudUpload } from 'react-icons/io';
import Title from '../../components/common/Title';
import Loading from '../../components/common/Loading';
import Input from '../../components/common/Input';
import Button from '../../components/common/Button';
import styles from '../../styles/pages/admin/RegisterBurger.module.scss';
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {urlProd, urlTest} from '../../utilities/urls'
import useForm from '../../hooks/useForm';

const RegisterBurger = () => {
    const [loading, setLoading] = useState(false)
    const nome = useForm('nome')
    const valor = useForm('valor')
    const [categoria, setCategoria] = useState('')
    const [media, setMedia] = useState(null)
    const [ingredientes, setIngredientes] = useState('')
    const [previewImg, setPreviewImg] = useState(null)

    function handleIngredientes({target}){
        setIngredientes(target.value)
    }
    function handleSelect({target}){
        setCategoria(target.value)
    }

    function handleMedia({target}){
        const file = URL.createObjectURL(target.files[0])
        if(file){
            setPreviewImg(file)
        }
        setMedia(target.files[0])
    }

    async function handleSubmit(event){
      const token = window.localStorage.getItem('token')
        event.preventDefault()
        const formData = new FormData()
        if(
            media &&
            nome.value &&
            ingredientes && 
            categoria &&
            valor.value 
        ){
            formData.append('imagem', media)
            formData.append('nome', nome.value)
            formData.append('categoria', categoria)
            formData.append('valor', valor.value)
            formData.append('ingredientes', ingredientes)

            try{
                setLoading(true)
                const response = await fetch( urlProd + 'admin/functions', {
                    method: 'POST',
                    headers:{
                      'Authorization' : 'Bearer ' + token
                    },
                    body: formData
                })
                const json = await response.json()
                console.log(response, json)
                if(response.ok){
                    alert('Cadastro concluído. O item foi adicionado ao cardápio.')
                    setMedia(null)
                    setIngredientes('')
                    setPreviewImg(null)
                    setCategoria(null)
                    nome.value === ''
                    valor.value === ''
                }if(!response.ok){
                  alert('Não foi possível concluir o cadastro. Verifique as informações e tente novamente.')
                }
            }catch(err){
                alert('Ocorreu um erro inesperado. Por favor verifique sua conexão!')
            }
            finally{
                setLoading(false)
            }
        }
        else{
           alert('Por favor, preencha todos os dados.')
        }
    }

    if(loading){
         return <Loading/>
    }
  return (
    <section className={styles.container}>
      <form action="" onSubmit={handleSubmit}>
      <Title>Registrar Produto</Title>
        <label htmlFor="imagem" className={styles.fileUpload}>
          Selecionar Imagem <IoMdCloudUpload />
          <input type="file" id="imagem" name="imagem"  onChange={handleMedia}/>
        </label>
        {previewImg ? (
          <picture className={styles.containerImg}>
            {previewImg && (
              <span>
                <img src={previewImg} alt="" />
              </span>
            )}
          </picture>
        ) : (
          <p>Nenhum arquivo selecionado.</p>
        )}
        <Input type="text" name="nome" id="nome" label="Nome do alimento" {...nome} />
        <span>
          <label htmlFor="ingredinetes"> Ingredientes / Descrição</label>
          <textarea id="ingredientes" name="ingredinetes" value={ingredientes} onChange={handleIngredientes} />
        </span>
        <select name="categoria" id="categoria" onChange={handleSelect}>
            <option value="">Selecione uma categoria</option>
            <option value="hamburguer">Hamburguer</option>
            <option value="porcoes">Porções</option>
            <option value="bebidas">Bebidas</option>
            <option value="sobremesas">Sobremesas</option>
        </select>
        <Input type="number" name="valor" id="valor" label="Valor" {...valor} />
        <Button>Registrar</Button>
      </form>
    </section>
  );
};

export default RegisterBurger;
