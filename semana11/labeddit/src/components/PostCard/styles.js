import styled from 'styled-components';

export const PostContainer = styled.article`
  width: 90%;
  height: 200px;
  display: grid;
  grid-template-columns: 5rem 1fr;
  grid-template-rows: 1fr;
  margin: 3rem auto 0 auto;
  background-color: #FFFFFF;
  border-radius: 5px;
  box-shadow: 10px 10px 10px 0px rgba(0,0,0,0.75);
  border: 2px solid #CECFE0;

  &:hover {
    border: 2px solid #878A8C;
  }

  @media(max-width: 420px) {
    height: 300px;
  }
`
export const VotesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: #F8F9FA;
  border-radius: 5px;
`
export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;

  &:hover {
    background-color: #E8E8E8;
    cursor: pointer;
  }
`
export const VotesCount = styled.span`
  color: #1A1A1B;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.2rem 0;
`
export const ContantContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr 3rem;
  border-radius: 5px;
  padding: 1rem;
  cursor: pointer;
`
export const PostInfoContainer = styled.div`
  max-width: 100%;
  height: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 1rem;

  @media(max-width: 420px) {
    padding: 0.5rem;
  }
`
export const Img = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`
export const PostTitle = styled.label`
  color: #1A1A1B;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0.5rem 0.5rem 0;
`
export const AuthorPosting = styled.span`
  color: #979A9C;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem 0;
`
export const PostTextContainer = styled.div`
  width: 100%;
  max-height: 90%;
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const PostText = styled.p`
  max-width: 42ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: wrap;
  color: #1A1A1B;
  font-size: 2rem;
  font-weight: bold;

  @media(max-width: 420px) {
    max-width: 20ch;
  }
`
export const PostActionsContainer = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const CommentsContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-right: 0.5rem;

  &:hover {
    background-color: #E8E8E8;
    cursor: pointer;
  }
`
export const ShareContainer = styled.div`
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
  cursor: pointer;
`
export const ActionsText = styled.span`
  color: #878A8C;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem;
`