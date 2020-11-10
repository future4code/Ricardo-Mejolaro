import React from 'react';
import { FaFire, FaTrashAlt, FaHeart } from 'react-icons/fa';

/*Tags Styleds*/
import {
  Nav,
  IconsNavContainer,
} from './styles';

export default function NavBar(props) {
  return (
      <Nav>
        <IconsNavContainer>
          <FaFire size={'1.5rem'} color={props.primaryColor} />
        </IconsNavContainer>

        <IconsNavContainer>
          <FaHeart size={'1.5rem'} color={props.secondColor} />
        </IconsNavContainer>

        <IconsNavContainer>
          <FaTrashAlt size={'1.5rem'} color={'#fd5068'} />
        </IconsNavContainer>
      </Nav>
  );
}