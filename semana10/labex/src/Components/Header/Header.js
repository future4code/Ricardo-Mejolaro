import React from 'react';
import {useHistory} from 'react-router-dom';

import {
  HeaderContainer,
  LogoContainer,
  Link
} from './styles';

export default function Header({black}) {
  const history = useHistory()

  const goToHomePage = () => {
    history.push('/')
  }

  return (
    <HeaderContainer background={black}>
      <LogoContainer>
        <Link onClick={goToHomePage}>LabeX</Link>
      </LogoContainer>

        <Link>Festança Marciana</Link>
        <Link>Multi luau em Jupiter</Link>
        <Link>Surfando em Netuno</Link>
        <Link>Picnic de Inverno em Plutão</Link>
    </HeaderContainer>
  );
}