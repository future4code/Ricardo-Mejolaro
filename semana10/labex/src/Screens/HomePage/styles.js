import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 70%;
  height: 300px;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`
export const Title = styled.h1`
  color: #FFF;
`
export const ButtonsContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 70px;
`
export const Button = styled.button`
  width: 200px;
  min-height: 100px;
  border: 2px solid #FFF;
  background-color: transparent;
  color: #FFF;
  font-size: 20px;
  font-weight: bold; 
  transition: all 2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000000;
    background-color: #FFF;
  }
  
`