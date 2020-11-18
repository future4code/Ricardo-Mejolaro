import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 40%;
  padding: 10px;
  border: 2px solid #FFF;
  margin: 120px;
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
export const SubTitle = styled.p`
  color: #FFF;
  margin: 0;
  font-weight: 500;  
`
export const Input = styled.input`
  width: 80%;
  height: 25px;
  background-color: #FFF;
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  padding: 5px 15px;
  margin-top: 25px;
  border-radius: 10px;
`
export const Select = styled.select`
  width: 87%;
  height: 40px;
  background-color: #FFF;
  color: #757575;
  font-size: 18px;
  font-weight: 700;
  padding: 5px 15px;
  margin-top: 25px;
  border-radius: 10px;
`
export const Option = styled.option`
  background-color: #FFF;
  color: #757575;
  font-size: 18px;
  font-weight: 700;
  padding: 5px 15px;
  margin-top: 25px;
  border-radius: 10px;
`

export const TextArea = styled.textarea`
  width: 80%;
  background-color: #FFF;
  color: #000000;
  font-size: 18px;
  font-weight: 700;
  padding: 5px 15px;
  margin-top: 25px;
  border-radius: 10px;
  resize: vertical;

  &::placeholder {
    font-size: 20px;
    color: #757575;
  }
`
export const Button = styled.button`
  width: 87%;
  height: 45px;
  border: 2px solid #FFF;
  background-color: transparent;
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  padding: 5px 0;
  margin-top: 32px;
  margin-bottom: 10px;
  border-radius: 10px;
  outline: none;
  transition: all 2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000000;
    background-color: #FFF;
  }
`