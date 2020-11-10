import React from 'react';

import ImgLeft from '../../img/astromatch-left.jpg';
import ImgRight from '../../img/astromatch-right.jpg';

/*Tags Styleds*/
import {
  Container,
  BackImg,
  DimsImage
} from './styles';

/*Componentes*/
import HomeScreen from '../HomeScreen/HomeScreen';
// import MatchScreen from '../MatchScreen/MatchScreen';

function AppContainer() {
  return (
    <Container>
      <BackImg imgUrl={ImgLeft}>
        <DimsImage />
      </BackImg>

      <HomeScreen />
      {/* <MatchScreen /> */}

      <BackImg imgUrl={ImgRight}>
        <DimsImage />
      </BackImg>
    </Container>
  );
}

export default AppContainer;