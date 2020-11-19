import { useHistory } from 'react-router-dom';

/*Tags styleds*/
import {
  ApplicationTripContainer,
  Title,
  SubTitle,
  Form,
  Input,
  Select,
  Option,
  Button
} from './styles';

/*Hooks Customizados*/
import useRequestData from '../../hooks/useRequestData';
import useTrips from '../../hooks/useTrips';
import { useForm } from '../../hooks/useForm';

/*Services*/
import applyToTrip from '../../services/ApplyToTrip';

/*Constantes*/
const countriesURL = 'https://restcountries.eu/rest/v2/all';
const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont';

export default function ApplicationFormPage() {
  const countries = useRequestData(countriesURL, []) || [];
  const trips = useTrips(`${baseURL}/trips`, []) || [];
  const history = useHistory()

  const { form, onChange } = useForm({ 
    name: '',
    age: '',
    profession: '',
    country: '',
    tripId: '',
    applicationText: ''
  });

  const handleApplicationTrip = (event) => {
    event.preventDefault();
    applyToTrip(form).then(() => {
      history.push("/application-form")
    }).catch((error) => {
      console.log(error.message)
    })
  }

  return (
    <ApplicationTripContainer>
      <Title>Inscrever-se</Title>
      <SubTitle>Por favor, preencha com seus dados e escolha uma viagem:</SubTitle>

      <Form onSubmit={handleApplicationTrip}>
        <Input 
          type={'text'}
          value={form.name}
          name={'name'}
          pattern={'^.{3,}$'}
          onChange={onChange}
          placeholder={'Nome'} 
          required
        />
        <Input 
          type={'number'}
          value={form.age}
          name={'age'}
          onChange={onChange}
          placeholder={'Idade'}
          min={'18'} 
          required 
        />
        <Input 
          type={'text'}
          value={form.profession}
          name={'profession'}
          onChange={onChange}
          placeholder={'Profissão'} 
          required 
        />
        
        <Select onChange={onChange} value={form.country} name={'country'}>
          <Option value={''} hidden>País</Option>
          {countries.map(country => {
            return <Option 
                    key={country.name} 
                    value={country.name}
                    name={'country'}
                    required 
                  >
                  {country.name}
                  </Option>
            })
          }
        </Select>
        <Select onChange={onChange} value={form.tripId} name={'tripId'}>
          <Option value={''} hidden>Viagem</Option>
          {trips.map(trip => {
            return <Option 
                    key={trip.id}
                    value={trip.id}
                    name={'tripId'}
                    required 
                    >
                    {trip.name}
                    </Option>
            })
          }
        </Select>
        <Input 
          value={form.applicationText}
          name={'applicationText'}
          pattern={'^.{30,}$'}
          onChange={onChange}
          placeholder={'Por que você? Mínimo 30 caracteres!'} 
          required 
        />
        <Button>Inscrever-se</Button>
      </Form>

    </ApplicationTripContainer>
  );
}