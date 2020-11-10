import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100vw;
  height: 100vh;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 600px 1fr;

`

export const BackImg = styled.div`
  background: url(${(props)=>props.imgUrl}) center center/cover;
  background-size: 85%;
`