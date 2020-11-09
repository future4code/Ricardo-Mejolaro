import styled from 'styled-components';

export const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  padding: 10px;
  margin-top: 20px;
`
export const H2 = styled.h2`
  color: #1DB954;
  margin-bottom: 32px;
`
export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid #FFF;
`
export const Input = styled.input`
  width: 90%;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #111;
  outline: none;
  background-color: #E8F0FE;
  font-size: 20px;
  color: #1DB954;
  font-weight: bold;
  padding: 5px 10px;
  margin-right: 10px;

  &::placeholder {
    padding: 5px;
    font-size: 18px;
  }
`
export const Content = styled.p`
  color: #1DB954;
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
  cursor: pointer;

  &:hover {
    color: #059b39;
  }
`
export const Button = styled.button`
  background-color:#1DB954;
  color: #FFF;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #059b39;
  }
`