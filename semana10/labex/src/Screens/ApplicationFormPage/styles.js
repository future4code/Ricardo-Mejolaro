import styled from 'styled-components';

export const ApplicationTripContainer = styled.div`
  width: 70%;
  padding: 10px;
  margin-top: 65px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media(max-width: 400px) {
    width: 95%;
  }
`
export const Title = styled.h2`
  color: #FFF;
  font-size: 32px;
  margin-top: 0;  

  @media(max-width: 400px) {
    margin-top: 50px;
  }
`
export const SubTitle = styled.p`
  max-width: 70%;
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
    width: 88%;
    border: none;

    &::placeholder {
      font-size: 15px;
    }
  }
`
export const Select = styled.select`
  width: 84%;
  height: 40px;
  background-color: #FFF;
  color: #757575;
  font-size: 18px;
  font-weight: 700;
  padding: 5px 15px;
  margin-top: 25px;
  border-radius: 10px;

  @media(max-width: 400px) {
    width: 100%;
    border: none;
  }
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
export const Button = styled.button`
  width: 84%;
  height: 45px;
  border: 2px solid #FFF;
  background-color: #000000;
  color: #FFF;
  font-size: 22px;
  font-weight: bold;
  padding: 5px 0;
  margin-top: 32px;
  margin-bottom: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  transition: all 2s ease-in-out;
  cursor: pointer;

  @media(max-width: 400px) {
    width: 100%;
  }

  &:hover {
    color: #000000;
    background-color: #FFF;
  }
`