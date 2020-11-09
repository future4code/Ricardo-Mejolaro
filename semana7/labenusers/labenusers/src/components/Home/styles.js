import styled from 'styled-components';

export const FormRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 280px;
  padding: 10px;
  margin-top: 20px;
`
export const H2 = styled.h2`
  color: #0A66C2;
`
export const ItemContainer = styled.div`
  width: 100%;
  padding: 10px;
`
export const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #111;
  outline: none;
  background-color: #E8F0FE;
  font-size: 20px;
  color:  #004182;
  font-weight: bold;
  padding: 5px 10px;

  &::placeholder {
    padding: 5px;
    font-size: 18px;
  }
`
export const Button = styled.button`
  min-width: 105%;
  background-color: #0A66C2;
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
  margin: 20px auto;
  padding: 12px 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #004182;
  }
`