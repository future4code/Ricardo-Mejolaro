import { useHistory } from 'react-router-dom';

/*Hooks*/
import { useForm } from "../../hooks/useForm";
import useUnProtectedPage from "../../hooks/useUnProtectedPage";

/*Coordenador de rotas */
import { goToLogin } from "../../routes/coordinator";

/*Serviços*/
import { signup } from '../../services/user';

/*Itens Material UI*/
import { TextField, Button } from '@material-ui/core';

/*Tags styleds*/
import { 
  SignupPageContainer,
  FormContainer, 
  Title,
  Text
} from './styles';

export default function SignupPage() {
  useUnProtectedPage()
  document.title = 'LabEddit - Signup'
  const history = useHistory()
  const { form, onChange } = useForm({ username: "", email: "", password: "" })

  const handleSubmission = (event) => {
    event.preventDefault()
    signup(form, history)
  }

  return (
    <SignupPageContainer>
      <Title>Signup</Title>
      <FormContainer onSubmit={handleSubmission} >
        <TextField
          label="NAME"
          variant="outlined"
          type="text"
          name="username"
          value={form.username}
          onChange={onChange}
          required
        />
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
          Continue
        </Button>
      </FormContainer>
      <Button
        color="primary"
        size={'large'}
        onClick={() => goToLogin(history)}
      >
        Already a LabEdditor? <Text>LOG IN</Text> 
      </Button>
    </SignupPageContainer>
  );
}