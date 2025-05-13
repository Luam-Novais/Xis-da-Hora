import React, { useContext } from 'react';
import styles from '../../styles/pages/user/Login.module.scss'
import { Link } from 'react-router-dom';
import Messages from '../../components/modals/Messages'
import Input from '../../components/common/Input';
import PasswordInput from '../../components/common/PasswordInput';
import Button from '../../components/common/Button';
import useForm from '../../hooks/useForm';
import { userContext } from '../../context/UserContext';
import Loading from '../../components/common/Loading'
import Title from '../../components/common/Title';

const Login = () => {
  const { userLogin, loading, status } = useContext(userContext)
  const email = useForm('email');
  const senha = useForm('senha');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(email.value && senha.value){
      const formData = {
        email: email.value,
        senha: senha.value,
      };
      userLogin(formData)
    }else{
      alert('Por favor, preencha todos os dados.')
    }
  };
  if(loading){
    return <Loading/>
  }
  return (
    <>
    <Messages status={status}/>
      <form className={styles.form} onSubmit={handleSubmit}>
          <img className={`${styles.logo} full-width`}src="/logo.svg" alt=""/>
          <Title>Entrar</Title>
          <Input label="Email" id="email" name="email" type="email" className="full-width" {...email} placeholder='email@email.com'/>
          <PasswordInput label="Senha" id="senha" name="senha" className="full-width" {...senha} />
          <Button type='submit' className="full-width">Entrar</Button>
          <p className="full-width">Ainda não tem uma conta ? crie agora!</p>
          <Link to="/auth/registrar">Criar Conta</Link>
      </form>
    </>
  );
};

export default Login;

