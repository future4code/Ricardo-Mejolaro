import { BrowserRouter } from 'react-router-dom';
import Router from '../routes/Router';

/*Tema*/
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../constants/theme';

/*Componentes*/
import Header from '../components/Header';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}

