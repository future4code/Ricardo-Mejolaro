/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';

/*Componentes*/
import CardTrip from '../../components/CardTrip/CardTrip'

export default function ListTripsPage () {
  useProtectedPage()

  return (
    <CardTrip />
  );
}
