import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 45px;
  background: linear-gradient(to bottom, ${(props) => props.background ? '#000000' : ''} 90%, transparent 90%);
  transition: all ease 0.5s;
`
export const LogoContainer = styled.div`
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 5px;
  font-family: 'D-DIN';
  cursor: pointer;
`
export const Link = styled.a`
  color: #FFF;
  text-decoration: none;
  font-family: 'D-DIN';
  font-weight: bold;
  position: relative;
  margin-left: 25px;
  cursor: pointer;

  &::after {
    content: "";
    width: 0;
    height: 1px;
    background-color: #FFF;
    position: absolute;
    left: 0;
    bottom: -3px;
  }

  &:hover::after {
    width: 100%;
    transition: width 400ms ease-in-out;
  }
`