import React from 'react';

import {
  HeaderContainer,
  LogoContainer,
  Link
} from './styles';

export default function Header({black}) {
  return (
    <HeaderContainer background={black}>
      <LogoContainer>
        <Link href="/">LabeX</Link>
      </LogoContainer>

        <Link href="/">Festança Marciana</Link>
        <Link href="/">Multi luau em Jupiter</Link>
        <Link href="/">Surfando em Netuno</Link>
        <Link href="/">Picnic de Inverno em Plutão</Link>
    </HeaderContainer>
  );
}