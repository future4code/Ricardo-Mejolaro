import React, { Component } from 'react';
import axios from 'axios';

/*Tags Styleds*/
import {
  UsersContainer,
  H2,
  ItemContainer,
  Label,
  Content,
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

export default class ViewUserDetails extends Component {
  state = {
    user: [],
    id: this.props.id,
    nameValue: '',
    emailValue: '',
    viewContent: true,
    viewInput: false
  }

  /*Chama a função de renderização do usuário na construção do componente*/
  componentDidMount() {
    this.handleUser()
  }

  /*Faz a requisição de um usuário para a API*/
  handleUser = async () => {
    try {
      const res = await axios.get(`${baseUrl}/${this.state.id}`, headerApi)
      this.setState({ user: res.data })

    } catch (error) {
      console.log(`Ops: ${error.message}`)
    }
  }

  /*Faz a requisição de exclusão de um usuário para a API*/
  deleteUser = async (id) => {
    const check = window.confirm("Tem certeza que deseja apagar este usuário?")
    if (check) {
      try {
        await axios.delete(`${baseUrl}/${id}`, headerApi)
        alert('Usuário deletado com sucesso!')
        this.props.changePage()
      } catch (error) {
        console.log(`Ops: ${error.message}`)
      }
    }
    return
  }

  /*Ao clicar no botão editar define se o que será renderizado será o input com os valores
    ou os valores em texto.
  */
  clickUpdateUser = () => {
    this.setState({
      nameValue: this.state.user.name,
      emailValue: this.state.user.email,
      viewContent: !this.state.viewContent,
      viewInput: !this.state.viewInput
    })
  }

  /*Faz a requisição de atualização de um usuário para a API*/
  updateUser = async () => {
    const body = {
      name: String(this.state.nameValue),
      email: String(this.state.emailValue)
    }
    try {
      await axios.put(`${baseUrl}/${this.state.id}`, body, headerApi)
      alert("Usuário alterado com sucesso!")
      this.setState({ viewContent: !this.state.viewContent, viewInput: !this.state.viewInput })
      this.handleUser()

    } catch (error) {
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
      <UsersContainer>
        <H2>Dados do usuário: </H2>
        {this.state.user.length > 0 ||
          <ItemContainer key={this.state.user.id}>
            <Label>Nome:</Label>
            {this.state.viewContent ?
              <Content>{this.state.user.name}</Content>
              :
              <Input value={this.state.nameValue} onChange={this.onChangInputName} />
            }
            <Label>Email:</Label>
            {this.state.viewContent ?
              <Content>{this.state.user.email}</Content>
              :
              <Input value={this.state.emailValue} onChange={this.onChangInputEmail} />
            }
            <Button onClick={() => this.deleteUser(this.state.user.id)}>APAGAR</Button>
            {this.state.viewContent ?
              <Button onClick={() => this.clickUpdateUser(this.state.user.id)}>
                EDITAR
              </Button>
              :
              <Button onClick={() => this.updateUser(this.state.user.id)}>
                SALVAR
              </Button>
            }
          </ItemContainer>
        }
      </UsersContainer>
    )
  }
}