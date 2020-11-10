import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 375px;
  height: 90vh;
  background-color: #f5f7fa;
  margin: 32px auto 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`
export const Nav = styled.nav`
  display: flex;
  height: 50px;
  width: 100%;
  justify-content: space-around;
  padding: 10px 0;
  
`
export const IconsNavContainer = styled.div`
  cursor: pointer;
  transition: 400ms ease;

  &:hover {
      transform: scale(1.2);
  }
`
export const PhotoAndActionsContainer = styled.div`
  height: calc(100% - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ImgContainer = styled.div`
  width: 98%;
  height: 85%;
  background: url(${(props)=>props.imgUrl}) center center/cover;
  border-radius: 10px;
  display: flex;
  align-items: flex-end;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
`
export const Info = styled.div`
  width: 24px;
  height: 24px;
  background-color: #FFF;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const TextContainer = styled.div`
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
    right: 10px;
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
  box-shadow: 0 2px 6px 0 rgba(112, 125, 134, 0.14);
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