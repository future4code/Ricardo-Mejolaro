import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  display: grid;
  grid-template-columns: 15rem 1fr 40rem;
  align-items: center;
  justify-content: space-between;
  background-color: #FFFFFF;

  @media(max-width: 420px) {
    height: 200px;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
  }
`
export const Logo = styled.img`
  width: 80%;
  margin-left: 2rem;
  cursor: pointer;

  @media(max-width: 420px) {
    width: 50%;
    margin: 0.5rem auto;
  }
`
export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 1rem;
`

export const LoginLogoutButton = styled.button`
  width: 12rem;
  height: 32px;
  font-weight: bold;
  font-size: 1.1rem;
  border: 1px solid #0079D3;
  color: #0079D3;
  background-color: #FFFFFF;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`
export const SignupButton = styled.button`
  width: 12rem;
  height: 32px;
  font-weight: bold;
  font-size: 1.1rem;
  border: none;
  color: #FFFFFF;
  background-color: #0079D3;
  border-radius: 5px;
  outline: none;
  cursor: pointer;

  &:hover{
    opacity: 0.5;
  }
`