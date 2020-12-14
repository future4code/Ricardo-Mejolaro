import styled from 'styled-components';

export const ContantContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr 3rem;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;

  @media(max-width: 321px) {
    grid-template-rows: 8rem 1fr 4rem;
    max-width: 280px;
    padding: 0.5rem 0;
  }
`