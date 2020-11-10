import React from 'react';
import { FaTimes, FaStar, FaHeart, FaInfo } from 'react-icons/fa';

import ImgBack from '../../img/ayo.jpg'

/*Tags Styleds*/
import {
  CardContainer,
  PhotoAndActionsContainer,
  ImgContainer,
  TextContainer,
  Title,
  Bio,
  Info,
  ActionsContainer,
  Action
} from './styles';

/*Components*/
import NavBar from '../NavBar/NavBar';

export default function HomeScreen() {
  return (
    <CardContainer>
      <NavBar primaryColor={'#fd5068'} secondColor={'#dadfe6'}/>
      <PhotoAndActionsContainer>

        <ImgContainer imgUrl={ImgBack}>
          <TextContainer>
            <Title>
              Lorem 21
            </Title>
            <Bio>
              "Não há ninguém que ame a dor por si só, que a busque e queira tê-la, simplesmente por ser dor..."
            </Bio>
            <Info>
              <FaInfo color={'#111'} />
            </Info>
          </TextContainer>
        </ImgContainer>

        <ActionsContainer>
          <Action>
            <FaTimes size={'2rem'} color={'#fd5068'} />
          </Action>
          <Action>
            <FaStar size={'1.5rem'} color={'#2db1ff'} />
          </Action>
          <Action>
            <FaHeart size={'2rem'} color={'#1be4a1'} />
          </Action>
        </ActionsContainer>

      </PhotoAndActionsContainer>
    </CardContainer>
  );
}