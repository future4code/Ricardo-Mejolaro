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
  color: ${({ deleteColor }) => (deleteColor ? '#fd5068' : '#dadfe6')};

  &:hover {
      transform: scale(1.2);
      color: ${({ deleteColor }) => (deleteColor ? '#dadfe6' : '#fd5068')};
  }
`