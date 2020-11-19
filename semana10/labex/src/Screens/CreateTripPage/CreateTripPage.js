import { useHistory } from 'react-router-dom';

/*Tags styleds*/
import {
  CreateTripContainer,
  Title,
  SubTitle,
  Form,
  Input,
  Select,
  Option,
  Button
} from './styles';

/*Hooks Customizados*/
import useProtectedPage from '../../hooks/useProtectedPage';
import { useForm } from '../../hooks/useForm';

/*Services*/
import createTrip from '../../services/CreateTrip';

export default function CreateTripPage() {
  useProtectedPage();
  const history = useHistory()

  const { form, onChange } = useForm({
    name: '',
    planet: '',
    date: '',
    description: '',
    durationInDays: '',
  });

  const handleCreateTrip = (event) => {
    event.preventDefault();
    createTrip(form).then(() => {
      history.push("/trips/list")
    }).catch((error) => {
      console.log(error.message)
    })


  }

  return (
    <CreateTripContainer>
      <Title>Criar Viagem</Title>
      <SubTitle>Por favor, preencha com os dados da viagem:</SubTitle>

      <Form onSubmit={handleCreateTrip}>
        <Input
          type={'text'}
          value={form.name}
          name={'name'}
          pattern={'^.{5,}$'}
          onChange={onChange}
          placeholder={'Nome'}
          required
        />
        <Input
          type={'text'}
          value={form.description}
          name={'description'}
          pattern={'^.{30,}$'}
          onChange={onChange}
          placeholder={'Descrição, mínimo 30 caracteres'}
          required
        />
        <Input
          type={'number'}
          value={form.durationInDays}
          name={'durationInDays'}
          onChange={onChange}
          placeholder={'Duração em dias'}
          min={'50'}
          required
        />
        <Input
          type={'date'}
          value={form.date}
          name={'date'}
          onChange={onChange}
          placeholder={'Data da viagem'}
          min={new Date().getFullYear() + '-' + String(new Date().getMonth() + 1).padStart(2, '0') + '-' + new Date().getDate()}
          required
        />
        <Select onChange={onChange} value={form.planet} name={'planet'}>
          <Option value={''} hidden>Escolha um Planeta</Option>
          <Option value={'Mercúrio'}>Mercúrio</Option>
          <Option value={'Vênus'}>Vênus</Option>
          <Option value={'Marte'}>Marte</Option>
          <Option value={'Júpiter'}>Júpiter</Option>
          <Option value={'Saturno'}>Saturno</Option>
          <Option value={'Urano'}>Urano</Option>
          <Option value={'Netuno'}>Planeta</Option>
        </Select>
        <Button>Salvar</Button>
      </Form>

    </CreateTripContainer>
  );
}