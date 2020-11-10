import styled from 'styled-components';

export const Container = styled.main`
  max-width: 100vw;
  height: 100vh;
  background-color: #efefef;
  display: flex;
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr 500px 1fr;

`
export const BackImg = styled.div`
  background: url(${(props)=>props.imgUrl}) center center/cover;
  background-size: 85%;
  position: relative;
`
export const DimsImage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
`