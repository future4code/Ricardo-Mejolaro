/*Rotas*/
import Routes from '../../routes/Routes';

/*Imagens*/
import BackgroundImg from '../../img/background-image.jpg';

/*Tags styled*/
import {
  Container
} from './styles';

export default function AppContainer() {
  return (
      <Container background={BackgroundImg}>
        <Routes />
      </Container>
  );
}