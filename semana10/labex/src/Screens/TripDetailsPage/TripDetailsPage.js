/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';

export default function TripDetailsPage () {
  useProtectedPage()

  return (
    <div>
      Trip Details Page 
    </div>
  );
}