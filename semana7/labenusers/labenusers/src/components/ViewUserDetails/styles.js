import styled from 'styled-components';

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 700px;
  height: 140px;
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
`
export const Label = styled.label`
  font-size: 22px;
  font-weight: bold;
  color: green;
`

export const Content = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
`
export const Input = styled.input`
  height: 25px;
  border-radius: 10px;
  outline: none;
`

export const Button = styled.button`
  width: 10%;
  background-color: #111;
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: red;
  }
`