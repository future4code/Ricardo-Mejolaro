import React, { Component } from 'react';

import { OpenQuestion } from '../OpenQuestion/OpenQuestion';
import {OptionsQuestions} from '../OptionsQuestions/OptionsQuestions';

import {Container, Input} from './index';

export class PageThree extends Component {
  render() {
    return (
      <Container>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <OpenQuestion question={"5. Por que você não terminou um curso de graduação?"} />
        <Input />

        <OpenQuestion question={"6. Você fez algum curso complementar?"} />
        <OptionsQuestions 
            options={[
            "Nenhum",
            "Curso técnico",
            "Curso de inglês"
          ]}/>
      </Container>
    )
  }
}