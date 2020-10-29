import styled from 'styled-components';

export const CardContainer = styled.section`
  min-width: 150px;
  min-height: 270px;
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
`
export const PokemonImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 220px;
  max-height: 220px;
  background-color: #F2F2F2;
  border-radius: 5px;
`
export const PokemonImage = styled.img`
  width: 100%;
`
export const PokemonNumber = styled.span`
  margin: 0px 0px 10px 10px;
  font-size: 14px;
  opacity: 0.4;
  font-weight: bold;
`
export const PokemonName = styled.p`
  font-size: 22px;
  color: #313131;
  font-weight: bold;
  font-family: 'Roboto';
  margin: 0;
  margin-left: 10px;
`
export const PowerContainer = styled.div`
  display: flex;
  align-items: center;
`
export const PokemonPower = styled.span`
  background-color: #313131;
  color: #FFF;
  font-weight: bold;
  padding: 2px 5px;
  margin-left: 10px;
  margin-top: 5px;
`