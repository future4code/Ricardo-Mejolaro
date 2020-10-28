import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr;
`

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`

export const Button = styled.button`
  background-color: #111;
  color: #FFF;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  outline: none;
  justify-self: flex-start;

  &:hover {
    background-color: green;
  }
`