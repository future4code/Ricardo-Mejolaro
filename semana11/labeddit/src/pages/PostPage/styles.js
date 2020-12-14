import styled from 'styled-components';

export const FeedDetailsContainer = styled.div`
  width: 90vw;
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 3.2rem auto;
  padding: 1rem;
`
export const CreateCommentContainer = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 1rem auto;
  padding: 1.5rem;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.75);

  @media(max-width: 420px) {
    height: 300px;
    width: 100%;
  }

  @media(max-width: 321px) {
    height: 300px;
    width: 100%;
  }
`
