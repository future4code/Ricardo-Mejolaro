import styled from 'styled-components';

export const ContantContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr 3rem;
  grid-template-columns: 1fr;
  border-radius: 5px;
  padding: 1rem;
  box-sizing: border-box;

  @media(max-width: 321px) {
    grid-template-rows: 6rem 1fr 13rem;
    max-width: 280px;
    padding: 0.5rem 0;
  }

  @media(max-width: 420px) {
    grid-template-rows: 5rem 1fr 13rem;
    max-width: 280px;
    padding: 0.5rem 0;
  }
`
export const CommentingContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    background-color: #E8E8E8;
    cursor: pointer;
  }
`
export const CommentsCount = styled.label`
  color: #878A8C;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0 0.5rem 0.5rem;
`
export const ShareContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: #E8E8E8;
  }
`
export const SocialsContainer = styled.div`
  width: 8rem;
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0.5rem;
`
export const SocialContainer = styled.div`
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #E8E8E8;
  }
`
export const Link = styled.a`

`

