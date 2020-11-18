import {useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

/*Hooks*/
import useInput from '../../hooks/useInput';

/*Tags styleds*/
import {
  LoginContainer,
  Title,
  SubTitle,
  Input,
  Button
} from './styles';

/*Constantes*/
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont/login";

export default function LoginPage() {
  const [email, handleEmail] = useInput()
  const [password, handlePassword] = useInput()
  const history = useHistory()

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/trips/list");
    }
  }, [history])

  const hadleLogin = () => {
    if (email !== "" && password !== "") {
      const body = {
        email,
        password
      }
      axios.post(baseURL, body)
        .then((response) => {
          localStorage.setItem('token', response.data.token)
          history.push("/trips/list")
        })
        .catch(error => {
          if (error.message.includes('401')) {
            alert('Ops, usuário e/ou senha inválidos!')
          } else {
            console.log(error.message)
          }
        })
    } else {
      alert("Ops, preencha todos os dados corretamente!")
    }
  }

  return (
    <LoginContainer>
      <Title>Login</Title>
      <SubTitle>Por favor, informe seu e-mail e senha:</SubTitle>
      <Input type={'email'} value={email} placeholder={'EMAIL'} required onChange={handleEmail} />
      <Input type={'password'} value={password} placeholder={'SENHA'} required onChange={handlePassword} />
      <Button onClick={hadleLogin}>Login</Button>
    </LoginContainer>
  );
}