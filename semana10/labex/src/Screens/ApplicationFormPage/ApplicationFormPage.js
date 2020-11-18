
/*Tags styleds*/
import {
  LoginContainer,
  Title,
  SubTitle,
  Input,
  Select,
  Option,
  TextArea,
  Button
} from './styles';

/*Hooks Customizados*/
import useRequestData from '../../hooks/useRequestData';
import useTrips from '../../hooks/useTrips';

/*Constantes*/
const countriesURL = 'https://restcountries.eu/rest/v2/all';
const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont';

export default function ApplicationFormPage() {
  const countries = useRequestData(countriesURL, []) || [];
  const trips = useTrips(`${baseURL}/trips`, []) || [];

  return (
    <LoginContainer>
      <Title>Inscrever-se</Title>
      <SubTitle>Por favor, preencha com seus dados e escolha uma viagem:</SubTitle>
      <Input type={'text'} placeholder={'Nome'} required/>
      <Input type={'number'}placeholder={'Idade'} required min={'18'}/>
      <Input type={'text'}placeholder={'Profissão'} required/>
      <Select>
        <Option value={''} hidden>País</Option>
        {countries.map(country => {
            return <Option key={country.name}>{country.name}</Option>
          })
        }
      </Select>
      <Select>
        <Option value={''} hidden>Viagem</Option>
        {trips.map(trip => {
            return <Option key={trip.id}>{trip.name}</Option>
          })
        }
      </Select>
      <TextArea placeholder={'Por que você deve ser selecionado?'} rows="5" cols="33" maxLength={"200"} required />
      <Button>Salvar</Button>
    </LoginContainer>
  );
}