import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import FormContainer from '../components/FormContainer';
import Input from '../components/Input';
import Button from '../components/Button';
import useForm from '../hooks/useForm';
import { userContext } from '../context/UserContext';
import Title from '../components/Title';

const Login = () => {
  const { userLogin} = useContext(userContext)
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
  return (
    <>
      <FormContainer onSubmit={handleSubmit}>
        <img src="/logo.svg" alt="" className="logo full-width" />
        <Title>Entrar</Title>
        <Input label="Email" id="email" name="email" type="email" className="full-width" {...email} />
        <Input label="Senha" id="senha" name="senha" type="password" className="full-width" {...senha} />
        <Button className="full-width">Entrar</Button>
        <p className="full-width">Ainda não tem uma conta ? crie agora!</p>
        <Link to="/auth/registrar">Criar Conta</Link>
      </FormContainer>
      <img className="bgForm" src="/bg-form.jpg" alt="" />
    </>
  );
};

export default Login;

