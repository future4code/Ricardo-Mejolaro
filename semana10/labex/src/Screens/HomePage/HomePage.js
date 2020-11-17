import { useHistory } from 'react-router-dom';

/*Tags styleds*/
import {
  HomeContainer,
  Title,
  ButtonsContainer,
  Button,
} from './styles';

export default function HomePage() {
  const history = useHistory()

  const goToLoginPage = () => {
    history.push('/login')
  }
  
  const goToApplicationFormPage = () => {
    history.push('/application-form')
  }

  return (
    <HomeContainer>
      <Title>Bem vindos ao LabeX!</Title>
      <ButtonsContainer>
        <Button onClick={goToLoginPage}>Fazer Login</Button>
        <Button onClick={goToApplicationFormPage}>Candidatar-se a uma viagem</Button>
      </ButtonsContainer>
    </HomeContainer>
  );
}
