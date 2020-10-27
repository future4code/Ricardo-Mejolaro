import React, { Component } from 'react';
import axios from 'axios';

import {
  FormRegister,
  H2,
  ItemContainer,
  Label,
  Input,
  Button
} from './styles'

export default class Home extends Component {
  state = {
    nameValue: "",
    emailValue: "",
  }

  createUser = () => {
    const body = {
      name: String(this.state.nameValue),
      email: String(this.state.emailValue)
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', body, {
      headers: {
        Authorization: "ricardo-mejolaro-dumont"
      }
    }).then(res => {
      alert('Usuário cadastrado com sucesso!')
      this.setState({nameValue: "", emailValue: ""})
    }).catch(error => {
      alert(`Ops: ${error.message}`)
    })
  }

  onChangInputName = (e) => {
    this.setState({ nameValue: e.target.value })
  }
  onChangInputEmail = (e) => {
    this.setState({ emailValue: e.target.value })
  }

  render() {
    return (
      <FormRegister>
        <H2>Cadastrar:</H2>
        <ItemContainer>
          <Label>Nome: </Label>
          <Input placeholder={'Digite seu nome'} value={this.state.nameValue} onChange={this.onChangInputName} />
        </ItemContainer>
        <ItemContainer>
          <Label>Email: </Label>
          <Input placeholder={'Digite seu email'} value={this.state.emailValue} onChange={this.onChangInputEmail} />
        </ItemContainer>
        <Button onClick={this.createUser}>Salvar</Button>
      </FormRegister>
    )
  }
}