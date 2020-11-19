import React from 'react';
import {useHistory} from 'react-router-dom';

/*Tags styeleds*/
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
    </HeaderContainer>
  );
}