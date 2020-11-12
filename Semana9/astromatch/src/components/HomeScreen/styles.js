import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 375px;
  height: 90vh;
  background-color: #f5f7fa;
  margin: 10px auto 0 auto;
  border-radius: 10px;
  box-shadow: 10px 5px 10px 3px rgba(0, 0, 0, 0.7);

  @media(max-width: 400px) {
    margin-top: 0;
    height: 100vh;
  }
`
export const PhotoAndActionsContainer = styled.div`
  height: calc(100% - 50px);
  min-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgContainer = styled.div`
  width: 96%;
  height: 85%;
  background: url(${(props) => props.imgUrl}) center top/cover;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
  opacity: 1;
  position: relative;

  span {
    opacity: 0;
    position: absolute;
    top: 40px;
    right: 40px;
  }

  ${(props) => props.decision !== true} {

    span {
      border-radius: 5px;
      padding: 5px 10px;
      border: 2px solid ${({ swipe }) => (swipe ? '#fd5068' : '#1be4a1')};
      color: ${({ swipe }) => (swipe ? '#fd5068' : '#1be4a1')};
      text-transform: uppercase;
      font-size: 40px;
      font-weight: bolder;
      position: absolute;
      top: 70px;
      right: ${({ swipe }) => (swipe ? '180px' : '40px')};;
      text-shadow: none;
      opacity: 1;
    }
    
    transform: ${({ swipe }) => (swipe ? 'rotate(-30deg) scale(0.8)' : 'rotate(30deg) scale(0.8)')};
    transition: 0.6s;
    margin-left: ${({ swipe }) => (swipe ? '-400px' : '400px')};
    opacity: 0;
    z-index: 10;
  }
`
export const Loading = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 40%;
`

export const Info = styled.div`
  width: 20px;
  height: 20px;
  background-color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextContainer = styled.div`
  min-width: 100%;
  color: #EEE;
  padding: 15px;
  background: rgb(2, 0, 36);
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(35, 34, 65, 0) 0%,
    rgba(0, 0, 0, 0.7) 52%
  );
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  ${Info} {
    position: absolute;
    right: 6px;
    bottom: 10px;
  }
`
export const Title = styled.h2`
  margin-bottom: 10px;
  font-size: 1.6rem;
`
export const Bio = styled.p`
  line-height: 1.5rem;
  font-size: 1.1rem;
  font-weight: 500;
`

export const ActionsContainer = styled.div`
  display: flex;
  flex: auto;
  align-items: center;
  margin: 1rem 0;
`
export const Action = styled.div`
  background: #FFFFFF;
  box-shadow: 0 2px 6px 0 rgba(136, 136, 136, 0.77);
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
  transition: 400ms ease;

  &:nth-child(2) {
    margin: 0 1rem;
    width: 48px;
    height: 48px;
  }

  &:hover {
      transform: scale(1.2);
  }
  
`