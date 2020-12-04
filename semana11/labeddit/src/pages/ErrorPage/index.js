import {useHistory} from 'react-router-dom';

/*Corrdenador de rotas*/
import {goToFeed} from '../../routes/coordinator';

/*Tags styleds*/
import { ErrorPagecontainer, ErrorPageButton } from './styles';

/*Imagens*/
import ErrorBackgroundImg from '../../assets/img/background-error-page.png';

export default function ErrorPage() {
  const history = useHistory()
  document.title = 'LabEddit - Erro Page'
  return (
    <ErrorPagecontainer background={ErrorBackgroundImg}>
      <ErrorPageButton onClick={() => goToFeed(history)}>Go To LabEddit</ErrorPageButton>
    </ErrorPagecontainer>
  );
}