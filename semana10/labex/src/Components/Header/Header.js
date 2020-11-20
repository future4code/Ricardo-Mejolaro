import React from 'react';
import { useHistory } from 'react-router-dom';

/*Tags styeleds*/
import {
  HeaderContainer,
  LogoContainer,
  LinkContainer,
  Link
} from './styles';

export default function Header({ black }) {
  const history = useHistory()
  const token = localStorage.getItem('token')
  const url = window.location.href;

  const goToHomePage = () => {
    history.push('/')
  }

  const goToBack = () => {
    alert(url)
    const location = url
    if(location === 'http://ricardo-mejolaro-labex.surge.sh/login' || location === 'http://ricardo-mejolaro-labex.surge.sh/trips/list') {
      goToHomePage()
    } else {
      history.goBack()
    }
  }

  const hadleLogout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <HeaderContainer background={black}>
      <LogoContainer>
        <Link onClick={goToHomePage}>LabeX</Link>
      </LogoContainer>

      <LinkContainer>
        {(token !== null && url !== "http://ricardo-mejolaro-labex.surge.sh/application-form" && url !== "http://ricardo-mejolaro-labex.surge.sh/login") &&
          <Link onClick={hadleLogout}>Logout</Link>
        }
        {url === "http://ricardo-mejolaro-labex.surge.sh/" || url === "http://ricardo-mejolaro-labex.surge.sh/trips/list" ?
          <div></div>
          :
          <Link onClick={goToBack}>Voltar</Link>
        }
      </LinkContainer>
    </HeaderContainer>
  );
}