import React from 'react';
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`
export const ItemContainer = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`
export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`
export const Input = styled.input`
  outline: none;
`