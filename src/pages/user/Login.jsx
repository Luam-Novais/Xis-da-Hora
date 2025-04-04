import React, { useContext} from 'react';
import styles from '../../styles/pages/user/Login.module.scss'
import { Link } from 'react-router-dom';
import Input from '../../components/Input';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import { userContext } from '../../context/UserContext';
import Loading from '../../components/Loading'
import Title from '../../components/Title';

const Login = () => {
  const { userLogin, loading } = useContext(userContext)
  const email = useForm('email');
  const senha = useForm('senha');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email.value,
      senha: senha.value,
    };
    userLogin(formData)
  };
  if(loading){
    return <Loading/>
  }
  return (
    <section>
      <form className={styles.form} onSubmit={handleSubmit}>
          <img className={`${styles.logo} full-width`}src="/logo.svg" alt=""/>
          <Title>Entrar</Title>
          <Input label="Email" id="email" name="email" type="email" className="full-width" {...email} />
          <Input label="Senha" id="senha" name="senha" type="password" className="full-width" {...senha} />
          <Button className="full-width">Entrar</Button>
          <p className="full-width">Ainda não tem uma conta ? crie agora!</p>
          <Link to="/auth/registrar">Criar Conta</Link>
      </form>
    </section>
  );
};

export default Login;

