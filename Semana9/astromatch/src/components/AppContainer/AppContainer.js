import React from 'react';

import ImgLeft from '../../img/astromatch-left.jpg';
import ImgRight from '../../img/astromatch-right.jpg';

/*Tags Styleds*/
import {
  Container,
  BackImg
} from './styles';

/*Componentes*/
import Card from '../Card/Card';

function AppContainer() {
  return (
    <Container>
      <BackImg imgUrl={ImgLeft}/>
      <Card />
      <BackImg imgUrl={ImgRight}/>
    </Container>
  );
}

export default AppContainer;