import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 375px;
  height: 90vh;
  background-color: #f5f7fa;
  margin: 10px auto 5px auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);

  @media(max-width: 400px) {
    margin-top: 0;
    height: 100vh;
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
  min-height: calc(95% - 50px);
  min-width: 375px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #dadfe6;
`
export const ItemContainer = styled.div`
  width: 95%;
  height: 60px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 10px 0 rgba(136, 136, 136, 0.77);
  background-color: #FFFFFF;
  margin: 5px;
  padding: 10px;
  position: relative;

  div {
    position: absolute;
    top: 35%;
    right: 10px;
  }
`
export const Img = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`
export const Title = styled.h2`
  margin-left: 10px;
  font-size: 1.3rem;
`

export const Loading = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 40%;
`