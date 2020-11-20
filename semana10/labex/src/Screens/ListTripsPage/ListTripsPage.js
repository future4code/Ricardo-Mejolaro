import React from 'react';
import { useHistory } from 'react-router-dom';

/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';
import useTrips from '../../hooks/useTrips';

/*Tags styeleds*/
import {
  CardContainer,
  Title,
  LoadingImg,
  Card,
  Button
} from './styles';

/*Icones*/
import { FaRocket } from 'react-icons/fa';

/*Imagens*/
import Loading from '../../img/loading.gif';

/*Constantes*/
const baseURL = 'https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont';

export default function ListTripsPage () {
  useProtectedPage()
  const trips = useTrips(`${baseURL}/trips`, []) || [];
  const history = useHistory();

  const goToTripDetails = (id) => {
    history.push(`/trip/details/${id}`)
  }

  const goToCreateTrip = () => {
    history.push(`/trip/create`)
  }
  return (
    <CardContainer>
      <Title>Viagens espaciais: </Title>
      {trips.length === 0 ? 
        <LoadingImg src={Loading}/>
        :
        trips.map(trip => {
          return <Card key={trip.id} onClick={() => { goToTripDetails(trip.id) }}>{trip.name} <FaRocket color={'green'} /></Card>
        })
      }
      <Button onClick={goToCreateTrip}>Criar viagem</Button>
    </CardContainer>
  );
}
