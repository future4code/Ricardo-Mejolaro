import styled from 'styled-components';

export const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 300px;
  padding: 10px;
`
export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 5px 0;
  background-color: #1DB954;
`
export const Label = styled.label`
  font-size: 24px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #FFF;
`
export const Content = styled.p`
  font-size: 22px;
  font-weight: bold;
  margin-right: 5px;
  color: #FFF;
  background-color: #121212;
  padding: 10px;
  border-radius: 5px;
`
export const TracksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 5px 0;
  background-color: #059b39;
  margin: 10px 0;
  border-radius: 5px;
`
export const ViewTrackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px 50px;
  align-items: center;
  width: 90%;
  padding: 5px;
  background-color: #1DB954;
  margin: 10px 0;
  border-radius: 5px;
`
export const ViewTrack = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 1px;
  color: #FFF;
  padding: 5px;
  border-radius: 5px;
`
export const Audio = styled.audio`
  width: 100%;
  padding: 5px;
  outline: none;
`

export const IconImage = styled.img`
  margin-left: 15px;
  width: 32px;
  cursor: pointer;
`

export const AddTracksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 5px 0;
  background-color: #059b39;
  margin: 10px 0;
`
export const Input = styled.input`
  width: 90%;
  height: 20px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #E8F0FE;
  font-size: 20px;
  color:  #059b39;
  font-weight: bold;
  padding: 5px 10px;
  margin: 5px 0;

  &::placeholder {
    padding: 5px;
    font-size: 18px;
  }
`
export const Button = styled.button`
  width: 95%;
  background-color: #121212;
  color: #FFF;
  font-weight: bold;
  font-size: 18px;
  margin: 20px auto;
  padding: 12px 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  outline: none;
  opacity: 1;
  transition: 400ms;

  &:hover {
    opacity: 0.9;
  }
`