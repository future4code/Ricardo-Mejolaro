import React from 'react';
import { useHistory } from 'react-router-dom';

/*Tags styeleds*/
import {
  HeaderContainer,
  LogoContainer,
  Link
} from './styles';

export default function Header({ black }) {
  const history = useHistory()

  const goToHomePage = () => {
    history.push('/')
  }

  const goToBack = () => {
    history.goBack()
  }

  const url = window.location.href;

  return (
    <HeaderContainer background={black}>
      <LogoContainer>
        <Link onClick={goToHomePage}>LabeX</Link>
      </LogoContainer>
      {url === "http://localhost:3000/" || url === "http://localhost:3000/trips/list" ?
        <p></p>
        :
        <Link onClick={goToBack}>Voltar</Link>
      }

    </HeaderContainer>
  );
}