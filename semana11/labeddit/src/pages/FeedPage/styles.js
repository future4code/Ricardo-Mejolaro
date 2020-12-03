import styled from 'styled-components';

export const FeedContainer = styled.main`
  width: 90vw;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 3.2rem auto;
  padding: 1rem;
`
export const CreatePostContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 auto;
  padding: 1rem;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.75);
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