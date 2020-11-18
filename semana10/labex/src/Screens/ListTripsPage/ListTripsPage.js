/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';

export default function ListTripsPage () {
  useProtectedPage()

  return (
    <div>
      List Trips Page 
    </div>
  );
}
