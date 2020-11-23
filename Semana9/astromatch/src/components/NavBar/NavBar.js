import React from 'react';

/*Ícones*/
import { FaTrashAlt, FaHeart } from 'react-icons/fa';
import { SiTinder } from 'react-icons/si';

/*Tags Styleds*/
import {
  Nav,
  IconsNavContainer,
} from './styles';

export default function NavBar(props) {

  const handleHomeScreen = () => {
    props.viewHomeScreen('Home')
  }

  const handleMatchScreen = () => {
    props.viewMatchScreen('Match')
  }

  const clearMatches = () => {
    props.clear()
  }

  return (
    <Nav>
      <IconsNavContainer>
        <SiTinder size={'1.5rem'} color={props.primaryColor} onClick={handleHomeScreen} />
      </IconsNavContainer>

      <IconsNavContainer>
        <FaHeart size={'1.5rem'} color={props.secondColor} onClick={handleMatchScreen} />
      </IconsNavContainer>

      {props.viewIcon &&
        <IconsNavContainer>
          <FaTrashAlt size={'1.5rem'} color={props.deleteColor} onClick={clearMatches} />
        </IconsNavContainer>
      }
    </Nav>
  );
}