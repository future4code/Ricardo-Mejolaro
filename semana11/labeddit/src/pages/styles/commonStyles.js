import styled from 'styled-components';

export const FeedContainer = styled.div`
  width: 90vw;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 3.2rem auto;
  padding: 1rem;
`
export const Title = styled.h2`
  font-size: 2rem;
  color: #1A1A1B;
`
export const FieldContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5rem 1fr;
  align-items: center;
  margin: 1rem auto;
  padding: 1rem;
`
export const Img = styled.img`
  width: 80%;
`
export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
export const TitlesDetailsPage = styled.h2`
  color: #1A1A1B;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 2rem 0 0 3.5rem;
`