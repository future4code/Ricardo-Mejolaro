import React, { Component } from 'react';

import {
  Container,
  ItemContainer,
  Label,
  Input,
  Select,
  Option
} from './index'

export class PageThree extends Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <ItemContainer>
          <Label>{'5. Por que você não terminou um curso de graduação?'}</Label>
          <Input />
        </ItemContainer>
        <ItemContainer>
          <Label>{'6. Você fez algum curso complementar?'}</Label>
          <Select>
            <Option value={"Nenhum"}>{"Nenhum"}</Option>
            <Option value={"Curso técnico"}>{"Curso técnico"}</Option>
            <Option value={"Curso de inglês"}>{"Curso de inglês"}</Option>
          </Select>
        </ItemContainer>
      </Container>
    )
  }
}