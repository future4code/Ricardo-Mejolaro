import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*Ícones*/
import { FaHeart } from 'react-icons/fa';
import LoadImg from '../../img/loading.gif';

/*Tags Styleds*/
import {
  CardContainer,
  ItemsContainer,
  ItemContainer,
  Img,
  Title,
  Loading
} from './styles';

/*Components*/
import NavBar from '../NavBar/NavBar';

/*Constantes*/
const baseUrl = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/mejolaro';

export default function MatchScreen(props) {
  const [matches, setMatches] = useState([]);

  const getMatches = async () => {
    try {
      const response = await axios.get(`${baseUrl}/matches`);
      setMatches(response.data.matches)
    } catch (error) {
      console.log(error)
    }
  }

  const clearMatches = async () => {
    try {
      await axios.put(`${baseUrl}/clear`);
      getMatches();
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMatches();
  }, [])

  return (
    <CardContainer>
      <NavBar
        secondColor={'#1be4a1'}
        deleteColor={"true"}
        viewMatchScreen={props.viewMatchScreen}
        viewHomeScreen={props.viewHomeScreen}
        clear={clearMatches}
        viewIcon={true}
      />
      <ItemsContainer>
        {matches.length > 0 ?
          matches.map(match => {
            return (
              <ItemContainer key={match.id}>
                <Img src={match.photo} alt={'Imagem pretendente match'}/>
                <Title>{match.name}</Title>
                <div>
                  <FaHeart size={'1.2rem'} color={'#1be4a1'} />
                </div>
              </ItemContainer>
            )
          }) :
          <Loading src={LoadImg} alt="carregando" />
        }
      </ItemsContainer>
    </CardContainer>
  );
}