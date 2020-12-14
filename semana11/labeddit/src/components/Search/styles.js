import styled from 'styled-components';

export const SearchContainer = styled.div`
width: 100%;
height: 38px;
background-color: #F6F7F8;
display: grid;
grid-template-columns: 2.5rem 1fr;
align-items: center;
padding-left: 2rem;
margin-left: 4rem;
border-radius: 5px;
border: none;
outline: none;

&:hover,
&:focus-within {
  border: 1px solid #0079D3;
  border-radius: 5px;
  background-color: #FFFFFF;
}

@media(max-width: 420px) {
  width: 80%;
}
`
export const SearchInput = styled.input`
width: 99%;
height: 36px;
background-color: #F6F7F8;
border: none;
outline: none;

&::placeholder {
  color: #878A8C;
  font-size: 1.4rem;
}

&:hover,
&:focus-within {
  background-color: #FFFFFF;
}
`