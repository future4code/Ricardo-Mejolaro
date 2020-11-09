import styled from 'styled-components';

export const AppContainer = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr;
`
export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
`
export const Section = styled.section`
  
`
export const Button = styled.button`
  background-color: #1DB954;
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
  margin-left: 10px;
  padding: 20px 20px 20px 60px;
  border-radius: 100% 20px 20px 100%;
  border: none;
  cursor: pointer;
  outline: none;
  justify-self: flex-start;
  align-self: flex-start;

  &:hover {
    background-color: #059b39;
  }
`