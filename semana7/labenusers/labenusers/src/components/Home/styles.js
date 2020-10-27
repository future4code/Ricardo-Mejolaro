import styled from 'styled-components';

export const FormRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 280px;
  padding: 10px;
  border: 2px solid #111;
  margin-top: 70px;
`
export const H2 = styled.h2`
  border-bottom: 2px solid #111;
`
export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 15px 0;
`
export const Label = styled.label`
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
  width: 80%;
  background-color: #111;
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
  margin-top: 20px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: green;
  }
`