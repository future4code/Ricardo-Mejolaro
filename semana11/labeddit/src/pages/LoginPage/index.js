import { useHistory } from 'react-router-dom';

/*Hooks*/
import { useForm } from "../../hooks/useForm";

/*Coordenador de rotas */
import { goToSignUp } from "../../routes/coordinator";

/*Serviços*/
import { login } from '../../services/user';

/*Itens Material UI*/
import { TextField, Button } from '@material-ui/core';

/*Tags styleds*/
import { 
  LoginPageContainer,
  FormContainer, 
  Title,
  Text
} from './styles';


export default function LoginPage() {
  const history = useHistory()
  const { form, onChange } = useForm({ email: "", password: "" })

  const handleSubmission = (event) => {
    event.preventDefault()
    login(form, history)
  }

  return (
    <LoginPageContainer>
      <Title>Login</Title>
      <FormContainer onSubmit={handleSubmission} >
        <TextField
          label="EMAIL"
          variant="outlined"
          type="email"
          name="email"
          value={form.email}
          onChange={onChange}
          pattern={/^\S+@\S+[\w-]{2,4}$/}
          required
        />
        <TextField
          label="PASSWORD"
          variant="outlined"
          type="password"
          name="password"
          value={form.password}
          onChange={onChange}
          required
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          size={'large'}
        >
          Log in
        </Button>
      </FormContainer>
      <Button
        color="primary"
        size={'large'}
        onClick={() => goToSignUp(history)}
      >
        New to LabEddit? <Text>SIGN UP</Text> 
      </Button>
    </LoginPageContainer>
  );
}