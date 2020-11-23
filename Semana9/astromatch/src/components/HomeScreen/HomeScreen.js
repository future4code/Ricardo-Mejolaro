import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*Ícones*/
import { FaTimes, FaStar, FaHeart, FaInfo } from 'react-icons/fa';
import LoadImg from '../../img/loading.gif';

/*Tags Styleds*/
import {
  CardContainer,
  PhotoAndActionsContainer,
  ImgContainer,
  Loading,
  TextContainer,
  Title,
  Bio,
  Info,
  ActionsContainer,
  Action
} from './styles';

/*Components*/
import NavBar from '../NavBar/NavBar';

/*Constantes*/
const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch';

export default function HomeScreen(props) {
  const [person, setPerson] = useState({});
  const [swipe, setSwipe] = useState(false);
  const [decision, setDecision] = useState(false);

  const getPerson = async () => {
    try {
      const response = await axios.get(`${baseUrl}/mejolaro/person`);
      setPerson(response.data.profile)
    } catch (error) {
      console.log(error)
    }
  }

  const matchPerson = async (id, choice, swipe) => {
    const body = {
      id,
      choice
    }

    try {
      await axios.post(`${baseUrl}/mejolaro/choose-person`, body);
      setDecision(true)
      if (swipe === 'right') {
        setSwipe(false)
      } else {
        setSwipe(true)
      }
      getPerson();

      setTimeout(() => {
        setDecision(false)
      }, 2000)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getPerson();
  }, [])

  return (
    <CardContainer>
      <NavBar
        primaryColor={'#fd5068'}
        secondColor={"true"}
        viewHomeScreen={props.viewHomeScreen}
        viewMatchScreen={props.viewMatchScreen}
        viewIcon={false}
      />
      <PhotoAndActionsContainer>

        {decision &&
          <Loading src={LoadImg} alt="carregando" />
        }
        {person !== '' ?
          <ImgContainer imgUrl={person.photo} swipe={swipe} decision={decision} alt={'Imagem pretendente'}>
            <span>{swipe ? 'Nope' : 'Like'}</span>
            <TextContainer>
              <Title>{person.name}</Title>
              <Bio>{person.bio}</Bio>
              <Info>
                <FaInfo color={'#111'} />
              </Info>
            </TextContainer>
          </ImgContainer>
          :
          <Loading src={LoadImg} alt="carregando" />
      }


        <ActionsContainer>
          <Action onClick={() => matchPerson(person.id, false, 'left')}>
            <FaTimes size={'2rem'} color={'#fd5068'} />
          </Action>
          <Action onClick={() => matchPerson(person.id, true, 'right')}>
            <FaStar size={'1.5rem'} color={'#2db1ff'} />
          </Action>
          <Action onClick={() => matchPerson(person.id, true, 'right')}>
            <FaHeart size={'2rem'} color={'#1be4a1'} />
          </Action>
        </ActionsContainer>

      </PhotoAndActionsContainer>
    </CardContainer>
  );
}