import styled from 'styled-components';

export const UsersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 300px;
  padding: 10px;
  margin-top: 5px;
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 5px 0;
  background-color: #E8F0FE;
`
export const Label = styled.label`
  font-size: 22px;
  font-weight: bold;
  color: #004182;
`

export const Content = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-right: 5px;
  color: #0A66C2;
  background-color: #FFF;
  padding: 10px;
  border-radius: 5px;
`
export const Input = styled.input`
  width: 80%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #111;
  outline: none;
  background-color: #E8F0FE;
  font-size: 20px;
  color: #004182;
  font-weight: bold;
  padding: 5px 10px;
  margin: 20px 0;
  margin-right: 10px;

  &::placeholder {
    padding: 5px;
    font-size: 18px;
  }
`

export const Button = styled.button`
  width: 90%;
  background-color: #0A66C2;
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #004182;
    color: #FFF
  }
`