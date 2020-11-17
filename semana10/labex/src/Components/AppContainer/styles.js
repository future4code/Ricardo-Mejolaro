import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  min-height: 100vh;
  background: url(${(props) => props.background}) center center/cover;
`