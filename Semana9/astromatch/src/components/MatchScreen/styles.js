import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 375px;
  height: 90vh;
  background-color: #f5f7fa;
  margin: 32px auto 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);

  @media(max-width: 400px) {
    margin-top: 0;
    height: 98vh;
  }
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
export const ItemsContainer = styled.div`
  height: calc(95% - 50px);
  min-width: 375px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #E4485E;
`
export const ItemContainer = styled.div`
  width: 95%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
  background-color: #FFFFFF;
  margin-top: 5px;
  padding: 10px;

  div {
    margin: 10px 10px 5px 190px;
  }
`

export const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`
export const Title = styled.h2`
  margin-left: 10px;
  font-size: 1.4rem;
`