import React from 'react';

import ImgLeft from '../../img/astromatch-left.jpg';
import ImgRight from '../../img/astromatch-right.jpg';

/*Tags Styleds*/
import {
  Container,
  BackImg
} from './styles';

/*Componentes*/
import HomeScreen from '../HomeScreen/HomeScreen';

function AppContainer() {
  return (
    <Container>
      <BackImg imgUrl={ImgLeft}/>
      <HomeScreen />
      <BackImg imgUrl={ImgRight}/>
    </Container>
  );
}

export default AppContainer;