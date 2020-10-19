import React, { Component } from 'react';

import {
  Container,
  ItemContainer,
  Label,
  Input,
  Select,
  Option
} from './index'

export class PageOne extends Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <ItemContainer>
          <Label>{'1. Qual seu nome?'}</Label>
          <Input />
        </ItemContainer>
        <ItemContainer>
          <Label>{'2. Qual sua idade?'}</Label>
          <Input />
        </ItemContainer>
        <ItemContainer>
          <Label>{'3. Qual seu email?'}</Label>
          <Input />
        </ItemContainer>
        <ItemContainer>
          <Label>{'4. Qual sua escolaridade?'}</Label>
          <Select>
            <Option value={"Ensino Médio Incompleto"}>{"Ensino Médio Incompleto"}</Option>
            <Option value={"Ensino Médio Completo"}>{"Ensino Médio Completo"}</Option>
            <Option value={"Ensino Superior Incompleto"}>{"Ensino Superior Incompleto"}</Option>
            <Option value={"Ensino Superior Completo"}>{"Ensino Superior Completo"}</Option>
          </Select>
        </ItemContainer>
      </Container>
    )
  }
}