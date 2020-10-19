import React, { Component } from 'react';

import {OpenQuestion} from '../OpenQuestion/OpenQuestion';

import {Container, Input} from './index'

export class PageTwo extends Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h3>
          <OpenQuestion question={"5. Qual curso?"} />
          <Input />

          <OpenQuestion question={"6. Qual unidade de ensino?"} />
          <Input />
      </Container>
    )
  }
}