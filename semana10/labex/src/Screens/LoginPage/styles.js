import styled from 'styled-components';

export const LoginContainer = styled.div`
  width: 60%;
  height: 330px;
  padding: 10px;
  margin-top: 150px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media(max-width: 400px) {
    width: 95%;
  }
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
export const Form = styled.form`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
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

  @media(max-width: 400px) {
    border: none;
  }
`
export const Button = styled.button`
  width: 84%;
  height: 45px;
  background-color: #000000;
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  padding: 5px 0;
  margin-top: 32px;
  border-radius: 10px;
  outline: none;
  border: none;
  transition: all 2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: #000000;
    background-color: #FFF;
  }

  @media(max-width: 400px) {
    width: 90%;
    border: none;
  }
`