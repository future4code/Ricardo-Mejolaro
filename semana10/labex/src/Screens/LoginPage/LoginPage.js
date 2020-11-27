import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

/*Hooks*/
import { useForm } from '../../hooks/useForm';

/*Service*/
import loginRequest from '../../services/LoginRequest';

/*Tags styleds*/
import {
  LoginContainer,
  Title,
  SubTitle,
  Form,
  Input,
  Button
} from './styles';

export default function LoginPage() {
  const { form, onChange } = useForm({ email: "", password: "" });
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/trips/list")
    }
  }, [history])

  const handleLogin = (event) => {
    event.preventDefault();

    loginRequest(form.email, form.password).then(() => {
      history.push("/trips/list")
    }).catch((error) => {
      console.log(error.message)
    })
  }

  return (
    <LoginContainer>
      <Title>Login</Title>
      <SubTitle>Por favor, informe seu e-mail e senha:</SubTitle>
      <Form onSubmit={handleLogin}>
        <Input 
          type={'email'} 
          value={form.email}
          name={'email'}
          placeholder={'EMAIL'} 
          onChange={onChange}
          required
        />
        <Input 
          type={'password'} 
          value={form.password}
          name={'password'}
          placeholder={'SENHA'}  
          onChange={onChange}
          required
        />
        <Button>Login</Button>
      </Form>
    </LoginContainer>
  );
}