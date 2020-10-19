import React, { Component } from 'react';

import {
  Container,
  Message,
} from './index'

export class PageFinal extends Component {
  render() {
    return (
      <Container>
        <h3>O FORMULÁRIO ACABOU</h3>
        <Message>{'Muito obrigado por participar! Entraremos em contato!'}</Message>
      </Container>
    )
  }
}