import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100vw;
  min-height: 100vh;
  background-color: #fd5068;
  display: flex;
  justify-content: center;

  @media(max-width: 400px) {
    background-color: #dadfe6;
  }

  span {
    color: #2db1ff;
  }

  h1 {
    text-align: center;
  }
`

export const H1 = styled.h1`
  color: #1be4a1;
  margin: 0 auto;

  @media(max-width: 400px) {
    display: none;
  }
`