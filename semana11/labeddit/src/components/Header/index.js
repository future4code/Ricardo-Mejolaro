import { Route } from 'react-router-dom';

/*Tags styleds*/
import {
  HeaderContainer,
  Logo,
  SearchContainer,
  SearchInput,
  ButtonsContainer,
  LoginLogoutButton,
  SignupButton
} from './styles';

/*Icones*/
import { FaSearch, FaUserAlt, FaUserCheck } from 'react-icons/fa';

export default function Header() {
  return (
    <HeaderContainer>
      <Logo>Lab<span>Eddit</span>.</Logo>

      <Route exact path={['/entrar', '/cadastrar-se']}>
        <div></div>
      </Route>

      <Route exact path={['/', '/postagem/:id']}>
        <SearchContainer>
          <FaSearch size={"16px"} color={"#878A8C"} />
          <SearchInput placeholder={'Search'} />
        </SearchContainer>
      </Route>

      <ButtonsContainer>
        <Route exact path={['/entrar', '/cadastrar-se']}>
          <LoginLogoutButton>LOG IN</LoginLogoutButton>
          <SignupButton>SIGN UP</SignupButton>
          <FaUserAlt size={"18px"} color={"#878A8C"}/>
        </Route>

        <Route exact path={['/', '/postagem/:id']}>
          <LoginLogoutButton>LOG OUT</LoginLogoutButton>
          <FaUserCheck size={"18px"} color={"#878A8C"}/>
        </Route>
      </ButtonsContainer>
    </HeaderContainer>
  );
}