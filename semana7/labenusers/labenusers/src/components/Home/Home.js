import React, { Component } from 'react';
import axios from 'axios';

/*Tags Styleds*/
import {
  FormRegister,
  H2,
  ItemContainer,
  Input,
  Button
} from './styles'

/*Constantes reutilizáveis*/
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
const headerApi = {
  headers: {
    Authorization: "ricardo-mejolaro-dumont"
  }
}

export default class Home extends Component {
  state = {
    nameValue: "",
    emailValue: "",
  }

  /*Faz a requisição de criação de um usuário para a API*/
  createUser = async () => {
    const body = {
      name: String(this.state.nameValue),
      email: String(this.state.emailValue)
    }

    try {
      await axios.post(baseUrl, body, headerApi)
      alert('Usuário cadastrado com sucesso!')
      this.setState({ nameValue: "", emailValue: "" })
    }
    catch (error) {
      console.log(`Ops: ${error.message}`)
    }
  }

  /*Input controlado nome do usuário*/
  onChangInputName = (e) => {
    this.setState({ nameValue: e.target.value })
  }
  /*Input controlado email do usuário*/
  onChangInputEmail = (e) => {
    this.setState({ emailValue: e.target.value })
  }

  render() {
    return (
      <FormRegister>
        <H2>Preencha com seus dados:</H2>
        <ItemContainer>
          <Input 
            placeholder={'Digite seu nome'} 
            value={this.state.nameValue} 
            onChange={this.onChangInputName} 
          />
        </ItemContainer>
        <ItemContainer>
          <Input 
            placeholder={'Digite seu email'} 
            value={this.state.emailValue} 
            onChange={this.onChangInputEmail} 
          />
        </ItemContainer>
        <Button onClick={this.createUser}>Cadastrar</Button>
      </FormRegister>
    )
  }
}