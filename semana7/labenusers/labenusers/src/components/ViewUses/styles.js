import styled from 'styled-components';

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  padding: 10px;
  border: 2px solid #111;
  margin-top: 10px;
`
export const H2 = styled.h2`
  border-bottom: 2px solid #111;
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 0;
  border-bottom: 2px solid #111;
`
export const Content = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
`
export const Button = styled.button`
  width: 10%;
  background-color: #111;
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: red;
  }
`