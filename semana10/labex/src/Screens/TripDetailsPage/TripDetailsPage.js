import {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';

import {
  DetailsContainer,
  Title,
  TripDetailsContainer,
  ItemsContainer,
  Label,
  Text,
  CandidatesTripContainer,
  CandidatesContainer,
  CandidateName,
  IconesContainer,
  LoadingImg
} from './styles';

/*Imagens*/
import Loading from '../../img/loading.gif';

/*Icones*/
import { IconContext } from "react-icons";
import { AiFillLike, AiFillDislike } from 'react-icons/ai';

/*Constantes*/
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont/trip";

export default function TripDetailsPage() {
  useProtectedPage()
  const [trip, setTrip] = useState({});
  const params = useParams()
  const token = localStorage.getItem('token')
  const candidates = trip.candidates || []
  const tripId = trip.id

  const decide = async (decision, id) => {
    const cadidateId = id
    const body = {
      approve: decision
    }
    try {
      await axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont/trips/${tripId}/candidates/${cadidateId}/decide`, body , {
        headers : {
          auth: localStorage.getItem('token')
        }
      })
      getTripsDetails()
    } catch (error) {
      console.log(error)
    }
  }

  const getTripsDetails = () => {
      axios.get(`${baseURL}/${params.id}`, {
        headers: {
          auth: token
        }
      })
        .then((response) => {
          setTrip(response.data.trip)
        })
        .catch(error => {
          console.log(error.message)
        })
    }

  useEffect(() => {
    getTripsDetails()
  }, [])

  return (
    <DetailsContainer>
      <TripDetailsContainer>
        <Title>Detalhes da viagem:</Title>

        {Object.keys(trip).length === 0 ?
          <LoadingImg src={Loading} />
          :
          <div>
            <ItemsContainer>
              <Label>Nome: </Label>
              <Text>{trip.name}</Text>
            </ItemsContainer>
            <ItemsContainer>
              <Label>Planeta: </Label>
              <Text>{trip.planet}</Text>
            </ItemsContainer>
            <ItemsContainer>
              <Label>Data: </Label>
              <Text>{trip.date}</Text>
            </ItemsContainer>
            <ItemsContainer>
              <Label>Duração: </Label>
              <Text>{trip.durationInDays} dias.</Text>
            </ItemsContainer>
            <ItemsContainer>
              <Text>{trip.description}</Text>
            </ItemsContainer>
          </div>
        }
      </TripDetailsContainer>

      <CandidatesTripContainer>
        <Title>Lista de candidatos:</Title>

        {candidates.length === 0 ?
          <LoadingImg src={Loading} />
          :
          candidates.map(candidate => {
            return (
              <CandidatesContainer key={candidate.id}>
                <CandidateName>{candidate.name}</CandidateName>

                <IconesContainer>
                  <IconContext.Provider value={{ className: 'react-icons' }}>
                    <AiFillLike size={'32'} onClick={() => decide(true, candidate.id)}/>
                    <AiFillDislike size={'32'} onClick={() => decide(false, candidate.id)}/>
                  </IconContext.Provider>
                </IconesContainer>


              </CandidatesContainer>
            )
          })}

      </CandidatesTripContainer>
    </DetailsContainer>
  );
}