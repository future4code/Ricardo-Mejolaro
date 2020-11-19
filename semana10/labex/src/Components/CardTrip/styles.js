import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 40%;
  padding: 10px;
  border: 2px solid #FFF;
  margin-top: 120px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #000000;
`
export const Title = styled.h2`
  color: #FFF;
  font-size: 32px;
  margin-top: 0; 
`

export const LoadingImg = styled.img`
  width: 200px;
  height: 200px;
`

export const Card = styled.div`
  width: 90%;
  height: 45px;
  border: 2px solid #FFF;
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
    border: 2px solid #000000;
  }
`
