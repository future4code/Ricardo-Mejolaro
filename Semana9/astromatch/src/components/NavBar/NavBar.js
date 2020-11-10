import React from 'react';
import { FaFire, FaTrashAlt, FaHeart } from 'react-icons/fa';

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

  return (
      <Nav>
        <IconsNavContainer>
          <FaFire size={'1.5rem'} color={props.primaryColor} onClick={handleHomeScreen} />
        </IconsNavContainer>

        <IconsNavContainer>
          <FaHeart size={'1.5rem'} color={props.secondColor} onClick={handleMatchScreen}/>
        </IconsNavContainer>

        <IconsNavContainer>
          <FaTrashAlt size={'1.5rem'} color={'#fd5068'} />
        </IconsNavContainer>
      </Nav>
  );
}