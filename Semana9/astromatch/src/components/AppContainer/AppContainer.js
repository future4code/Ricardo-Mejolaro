import React, { useState } from 'react';

/*Tags Styleds*/
import {
  Container,
  H1
} from './styles';

/*Componentes*/
import HomeScreen from '../HomeScreen/HomeScreen';
import MatchScreen from '../MatchScreen/MatchScreen';

function AppContainer(props) {
  const [viewHomeScreen, setViewHomeScreen] = useState(true);
  const [viewMatchScreen, setViewMatchScreen] = useState(false);

  const handlePage = (page) => {
    if (page === 'Home') {
      setViewHomeScreen(true)
      setViewMatchScreen(false)
    } else {
      setViewHomeScreen(false)
      setViewMatchScreen(true)
    }
  }

  return (
    <Container>

      {viewHomeScreen &&
        <div>
          <H1>Astro<span>Match</span></H1>
          <HomeScreen viewHomeScreen={handlePage} viewMatchScreen={handlePage} />
        </div>
      }

      {viewMatchScreen &&
        <div>
          <H1>Seus <span>Matches</span></H1>
          <MatchScreen viewHomeScreen={handlePage} viewMatchScreen={handlePage} />
        </div>

      }
    </Container>
  );
}

export default AppContainer;