import styled from 'styled-components';

export const AppContainer = styled.main`
  display: grid;
  grid-template-rows: 50px 100px 1fr;
  width: 70%;
  margin: 20px auto;
`
export const CardsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10px;
  gap: 15px;
  box-sizing: border-box;
` 