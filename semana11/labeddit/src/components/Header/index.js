import { Route, useHistory } from 'react-router-dom';

/*Coordenador de rotas */
import { goToLogin, goToSignUp, goToFeed } from "../../routes/coordinator";

/*Imagens*/
import logo from '../../assets/img/logo.png';

/*Icones*/
import { FaSearch, FaUserAlt, FaUserCheck } from 'react-icons/fa';

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

export default function Header() {
  const history = useHistory()

  const logout = () => {
    localStorage.removeItem("token");
    goToLogin(history);
  }

  return (
    <HeaderContainer>
      <Route exact path={['/', '/post/:id']}>
        <Logo src={logo} onClick={() => goToFeed(history)}/>
      </Route>

      <Route exact path={['/login', '/signup']}>
        <Logo src={logo} />
      </Route>


      <Route exact path={['/login', '/signup']}>
        <div></div>
      </Route>

      <Route exact path={['/', '/post/:id']}>
        <SearchContainer>
          <FaSearch size={"16px"} color={"#878A8C"} />
          <SearchInput placeholder={'Search'} />
        </SearchContainer>
      </Route>

      <ButtonsContainer>
        <Route exact path={['/login', '/signup']}>
          <LoginLogoutButton onClick={() => goToLogin(history)}>LOG IN</LoginLogoutButton>
          <SignupButton onClick={() => goToSignUp(history)}>SIGN UP</SignupButton>
          <FaUserAlt size={"18px"} color={"#878A8C"}/>
        </Route>

        <Route exact path={['/', '/post/:id']}>
          <LoginLogoutButton onClick={logout}>LOG OUT</LoginLogoutButton>
          <FaUserCheck size={"18px"} color={"#0079D3"}/>
        </Route>
      </ButtonsContainer>
    </HeaderContainer>
  );
}