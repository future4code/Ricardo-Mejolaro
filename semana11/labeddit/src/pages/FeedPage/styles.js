import styled from 'styled-components';

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

  @media(max-width: 420px) {
    height: 300px;
    width: 100%;
  }

  @media(max-width: 321px) {
    height: 300px;
    width: 100%;
  }
`