import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 40%;
  padding: 10px;
  margin-top: 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 400px) {
    width: 90%;
  }
`
export const Title = styled.h2`
  color: #FFF;
  font-size: 32px;
  margin-top: 0; 
`

export const LoadingImg = styled.img`
  width: 90%;
  max-height: 300px;
`

export const Card = styled.div`
  width: 90%;
  height: 45px;
  background-color: transparent;
  color: #FFF;
  font-size: 20px;
  font-weight: bold;
  padding: 5px 10px;
  margin-bottom: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;
  transition: all 1s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000000;
    background-color: #FFF;
  }

  @media(max-width: 400px) {
    background-color: #000000;
  }
`
export const Button = styled.button`
  width: 95%;
  height: 45px;
  background-color: #FFF;
  color: #000000;
  font-size: 22px;
  font-weight: bold;
  padding: 5px 0;
  margin-top: 32px;
  margin-bottom: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  transition: all 2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #FFF;
    background-color: #000000;
  }
`