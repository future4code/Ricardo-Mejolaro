import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-around;
  padding: 10px 0;
`
export const IconsNavContainer = styled.div`
  cursor: pointer;
  transition: 400ms ease;

  &:hover {
      transform: scale(1.2);
  }
`