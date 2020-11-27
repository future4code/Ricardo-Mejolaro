import styled from 'styled-components';

export const DetailsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 80px;

  @media(max-width: 400px) {
    margin-top: -150px;
    flex-direction: column;
    background-color: #000000;
  }
`
export const Title = styled.h1`
  max-width: 400px;
  font-size: 36px;
  color: #FFF;
  margin: 0;
  margin-bottom: 32px;

  @media(max-width: 400px) {
    margin-top: 170px;
  }
`
export const TripDetailsContainer = styled.div`
  width: 40%;
  min-height: 400px;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media(max-width: 400px) {
    width: 90%;
    margin-top: 80px;
  }
`
export const ItemsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
export const Label = styled.label`
  color: #DAA520;
  font-size: 28px;
  font-weight: bold; 
  margin-right: 10px;

  @media(max-width: 400px) {
    font-size: 20px;
  }
`
export const Text = styled.h2`
  width: 100%;
  color: #FFF;
  font-size: 26px;
  margin: 0;

  @media(max-width: 400px) {
    font-size: 18px;
  }
`
export const CandidatesTripContainer = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-align: center;

  @media(max-width: 400px) {
    width: 90%;
  }
`
export const CandidatesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-left: 5px;

  @media(max-width: 400px) {
    width: 90%;
    background-color: #000000;
  }
`
export const CandidateName = styled.span`
  color: #DAA520;
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`
export const IconesContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: space-between;
  
  .react-icons:first-child {
      color: green;
      cursor: pointer;
  } 

  .react-icons:last-child {
      color: red;
      cursor: pointer;
  } 
  `
export const LoadingImg = styled.img`
  max-width: 400px;
  max-height: 300px;
`