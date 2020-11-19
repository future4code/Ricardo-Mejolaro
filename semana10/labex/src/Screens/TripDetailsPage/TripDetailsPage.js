import { useParams } from 'react-router-dom';


/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';
import useTripsDetails from '../../hooks/useTripsDetails';

/*Constantes*/
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont/trip";

export default function TripDetailsPage() {
  useProtectedPage()
  
  const params = useParams()
  const token = localStorage.getItem('token')

  const trip = useTripsDetails(baseURL, params.id, token)

  return (
    <div>
      <p>{trip.name}</p>
      <p>{trip.id}</p>
      <p>{trip.description}</p>
    </div>
  );
}