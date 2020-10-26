import React, { Component } from 'react';

import {OpenQuestion} from '../OpenQuestion/OpenQuestion';
import {OptionsQuestions} from '../OptionsQuestions/OptionsQuestions';

import {Container, Input} from './index'

export class PageOne extends Component {
  state = {
    name: '',
    age: '',
    email: '',
    schooling: '',
  }

  onChangeInputName = (event) => {
    this.setState({name: event.target.value})
  }
  onChangeInputAge = (event) => {
    this.setState({age: event.target.value})
  }
  onChangeInputEmail = (event) => {
    this.setState({email: event.target.value})
  }
  
  render() {
    return (
      <Container>
        <h3>ETAPA 1 - DADOS GERAIS</h3>

          <OpenQuestion question={"1. Qual o seu nome?"} />
          <Input value={this.state.name} onChange={this.onChangeInputName}/>

          <OpenQuestion question={"2. Qual sua idade?"} />
          <Input value={this.state.age} onChange={this.onChangeInputAge}/>

          <OpenQuestion question={"3. Qual seu email?"} />
          <Input value={this.state.email} onChange={this.onChangeInputEmail}/>

          <OpenQuestion question={"4. Qual sua escolaridade?"} />
          <OptionsQuestions 
            options={[
              "Ensino médio incompleto",
              "Ensino médio completo",
              "Ensino superior incompleto",
              "Ensino superior completo"
          ]}/>
      </Container>
    )
  }
}