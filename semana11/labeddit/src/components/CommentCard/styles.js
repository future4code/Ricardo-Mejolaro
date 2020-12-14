import styled from 'styled-components';

export const CommentContainer = styled.article`
  width: 90%;
  height: 170px;
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
    grid-template-columns: 3rem 1fr;
    height: 300px;
    width: 100%;
  }

  @media(max-width: 321px) {
    height: 400px;
  }

`
export const ContantContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: 4rem 1fr;
  border-radius: 5px;
  padding: 1rem;

  @media(max-width: 321px) {
    grid-template-rows: 8rem 1fr;
    padding: 0;
  }
`
export const CommentInfoContainer = styled.div`
  max-width: 100%;
  height: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  padding: 1rem;

  @media(max-width: 420px) {
    padding: 0.5rem;
  }

  @media(max-width: 321px) {
    flex-direction: column;
  }
`
export const PointsPosting = styled.span`
  color: #979A9C;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 0.5rem;
`
export const Img = styled.img`
  width: 2rem;
  margin-right: 0.5rem;
`
export const CommentTextContainer = styled.div`
  width: 100%;
  max-height: 90%;
  display: flex;
  align-items: center;
  padding: 1rem;
`
export const CommentText = styled.p`
  width: 42ch;
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