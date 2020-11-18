/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';

export default function CreateTripPage () {
  useProtectedPage();

  return (
    <div>
      Create Trip Page 
    </div>
  );
}