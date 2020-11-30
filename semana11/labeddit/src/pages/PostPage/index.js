/*Hooks*/
import useProtectedPage from '../../hooks/useProtectedPage';

export default function PostsPage() {
  useProtectedPage()
  
  return (
    <div>
      PostsPage
    </div>
  );
}