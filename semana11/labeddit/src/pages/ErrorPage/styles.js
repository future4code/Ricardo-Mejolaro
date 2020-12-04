import styled from 'styled-components';

export const ErrorPagecontainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background: url(${(props => props.background)}) center center/cover;

  @media(max-width: 420px) {
    align-items: stretch;
    background: url(${(props => props.background)}) left center/cover;
  }
` 
export const ErrorPageButton = styled.button`
  width: 150px;
  height: 40px;
  background-color: #FF4500;
  color: #FFFFFF;
  font-weight: bold;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: #FFFFFF;
    color: #FF4500;
  }

  @media(max-width: 420px) {
    margin-top: 200px;
  }

` 