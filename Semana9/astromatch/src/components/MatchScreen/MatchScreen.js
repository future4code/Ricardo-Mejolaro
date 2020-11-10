import React from 'react';
import { FaHeart } from 'react-icons/fa';

import ImgBack from '../../img/ayo.jpg'

/*Tags Styleds*/
import {
  CardContainer,
  ItemsContainer,
  ItemContainer,
  Img,
  Title,
} from './styles';

/*Components*/
import NavBar from '../NavBar/NavBar';

export default function MatchScreen() {
  return (
    <CardContainer>
      <NavBar primaryColor={'#dadfe6'} secondColor={'#fd5068'}/>
      <ItemsContainer>
        <ItemContainer>
          <Img src={ImgBack} />
          <Title>Lorem</Title>
          <div>
            <FaHeart size={'1.2rem'} color={'#1be4a1'} />
          </div>
        </ItemContainer>
      </ItemsContainer>
    </CardContainer>
  );
}