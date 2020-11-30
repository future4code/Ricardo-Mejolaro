import { BrowserRouter } from 'react-router-dom';
import Router from '../routes/Router';

/*Componentes*/
import Header from '../components/Header';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>

  );
}

