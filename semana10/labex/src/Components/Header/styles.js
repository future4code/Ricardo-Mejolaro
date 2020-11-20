import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 250px;
  align-items: center;
  justify-content: space-around;
  background: linear-gradient(to bottom, ${(props) => props.background ? '#000000' : ''} 90%, transparent 90%);
  transition: all ease 0.5s;
`
export const LogoContainer = styled.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 5px;
  cursor: pointer;
  margin-left: 70px;

  @media(max-width: 400px) {
    margin-left: 5px;
  }
`
export const LinkContainer = styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-right: 10px;
`
export const Link = styled.a`
  color: #DAA520;
  font-size: 28px;
  text-decoration: none;
  font-weight: bold;
  position: relative;
  margin-left: 25px;
  cursor: pointer;

  &::after {
    content: "";
    width: 0;
    height: 1px;
    background-color: #DAA520;
    position: absolute;
    left: 0;
    bottom: -3px;
  }

  &:hover::after {
    width: 100%;
    transition: width 400ms ease-in-out;
  }
`