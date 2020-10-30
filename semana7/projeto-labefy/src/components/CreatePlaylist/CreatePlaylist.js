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
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
const headerApi = {
  headers: {
    Authorization: "ricardo-mejolaro-dumont"
  }
}

export default class CreatePlaylist extends Component {
  state = {
    nameValue: "",
  }

  /*Faz a requisição de criação de um Playlist para a API*/
  createUser = async () => {
    const body = {
      name: String(this.state.nameValue),
    }

    try {
      await axios.post(baseUrl, body, headerApi)
      alert('Playlist cadastrado com sucesso!')
      this.setState({ nameValue: ""})
    }
    catch (error) {
      const messageError = error.message.includes('400');
      if(messageError) {
        alert(`Playlist: ${this.state.nameValue}, já existe!`)
      } else {
        console.log(`Ops: ${error.message}`)
      }
    }
  }

  /*Input controlado nome do Playlist*/
  onChangInputName = (e) => {
    this.setState({ nameValue: e.target.value })
  }

  render() {
    return (
      <FormRegister>
        <H2>Como vamos chamar essa playlist?</H2>
        <ItemContainer>
          <Input 
            placeholder={'Digite o nome da nova playlist'} 
            value={this.state.nameValue} 
            onChange={this.onChangInputName} 
          />
        </ItemContainer>
        <Button onClick={this.createUser}>Salvar Playlist</Button>
      </FormRegister>
    )
  }
}