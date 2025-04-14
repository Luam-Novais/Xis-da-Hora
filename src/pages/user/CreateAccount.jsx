import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import Title from '../../components/Title';
import styles from '../../styles/pages/user/CreateAccount.module.scss'
import { userContext } from '../../context/UserContext';
import Loading from '../../components/Loading';

const CreateAccount = () => {
  const {userCreate, loading} = useContext(userContext)
  const nome = useForm('nome');
  const telefone = useForm('telefone');
  const email = useForm('email');
  const cep = useForm('cep');
  const endereco = useForm('endereco');
  const cidade = useForm('cidade');
  const senha = useForm('senha');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      nome.validate() &&
      telefone.validate() &&
      email.validate() &&
      cep.validate() &&
      endereco.validate() &&
      cidade.validate() &&
      senha.validate()
    ) {
      const formData = {
        nome: nome.value,
        telefone: telefone.value,
        email: email.value,
        cep: cep.value,
        endereco: endereco.value,
        cidade: cidade.value,
        senha: senha.value,
      };
      
      userCreate(formData)
    } else {
      alert('Por favor, preencha todos os dados.');
    }
  };
  
  if(loading){
    return <Loading/>
  }
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.form}>
        <img src="/logo.svg" alt="" className={`${styles.logo} full-width`} />
        <Title >Criar Conta</Title>
        <Input label="Nome" id="nome" name="name" type="text" {...nome} />
        <Input label="Numero" id="telefone" name="telefone" type="text" {...telefone} />
        <Input label="Email" id="email" name="email" type="email" className='full-width'{...email} />
        <Input label="Cep" id="cep" name="cep" type="number" {...cep} />
        <Input label="Endereço" id="endereco" name="endereco" type="text" {...endereco} />
        <Input label="Cidade" id="cidade" name="cidade" type="text"  {...cidade} />
        <Input label="Senha" id="senha" name="senha" type="password" className='full-width' {...senha} />

        <Button className="full-width">Cadastrar</Button>

        <span>Já tem uma conta ? <Link to='/auth/login'>Login</Link></span>
      </form>
    </>
  );
};

export default CreateAccount;

