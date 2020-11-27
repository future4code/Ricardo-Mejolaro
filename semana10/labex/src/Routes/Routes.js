import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

/*Componentes*/
import Header from '../components/Header/Header';

/*Telas*/
import HomePage from '../screens/HomePage/HomePage';
import LoginPage from '../screens/LoginPage/LoginPage';
import ApplicationFormPage from '../screens/ApplicationFormPage/ApplicationFormPage';
import ListTripsPage from '../screens/ListTripsPage/ListTripsPage';
import CreateTripPage from '../screens/CreateTripPage/CreateTripPage';
import TripDetailsPage from '../screens/TripDetailsPage/TripDetailsPage';

export default function Routes () {
  /*Lógica Header*/
  const [blackHeader, setBlackHeader] = useState(false)

  useEffect(() => {
    const scrollListener = () => {
      if(window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }

    window.addEventListener('scroll', scrollListener);

    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, [])

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'}>
          <Header black={blackHeader}/>
          <HomePage />
        </Route>
        <Route exact path={'/login'}>
          <Header black={blackHeader}/>
          <LoginPage />
        </Route>
        <Route exact path={'/application-form'}>
          <Header black={blackHeader}/>
          <ApplicationFormPage />
        </Route>
        <Route exact path={'/trips/list'}>
          <Header black={blackHeader}/>
          <ListTripsPage />
        </Route>
        <Route exact path={'/trip/create'}>
          <Header black={blackHeader}/>
          <CreateTripPage />
        </Route>
        <Route exact path={'/trip/details/:id'}>
          <Header black={blackHeader}/>
          <TripDetailsPage />
        </Route>
        <Route>
          <Header black={blackHeader}/>
          <div>Página não encontrada!</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}