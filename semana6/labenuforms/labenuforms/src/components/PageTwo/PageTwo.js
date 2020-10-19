import React, { Component } from 'react';

import {
  Container,
  ItemContainer,
  Label,
  Input
} from './index'

export class PageTwo extends Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
        <ItemContainer>
          <Label>{'5. Qual curso?'}</Label>
          <Input />
        </ItemContainer>
        <ItemContainer>
          <Label>{'6. Qual unidade de ensino?'}</Label>
          <Input />
        </ItemContainer>
      </Container>
    )
  }
}