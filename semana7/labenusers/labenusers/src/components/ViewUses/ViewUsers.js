import React, { Component } from 'react';
import axios from 'axios';

/*Tags Styleds*/
import {
  UsersContainer,
  Input,
  H2,
  ItemContainer,
  Content,
  Button
} from './styles'

/*Constantes reutilizáveis*/
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
const headerApi = {
  headers: {
    Authorization: "ricardo-mejolaro-dumont"
  }
}

export default class ViewUsers extends Component {
  state = {
    users: [],
    inputValueName: "",
    filtring: false,
    filteredUsers: []
  }

  /*Chama a função de renderização de todos os usuários na construção do componente*/
  componentDidMount() {
    this.handleAllUsers();
  }

  /*Faz a requisição de todos os usuários para a API*/
  handleAllUsers = async () => {
    try {
      const res = await axios.get(baseUrl, headerApi)
      this.setState({ users: res.data })

    } catch (error) {
      console.log(`Ops: ${error.message}`)
    }
  }

  /*No clique em um nome de usuário essa função envia o id deste usuários via 
    props para o componente ViewUserDetails.
  */
  handleUser = (id) => {
    this.props.changePage(id)
  }

  /*Faz a requisição de exclusão de um usuário para a API*/
  deleteUser = async (id) => {
    const check = window.confirm("Tem certeza que deseja apagar este usuário?")
    if (check) {
      try {
        await axios.delete(`${baseUrl}/${id}`, headerApi)
        alert('Usuário deletado com sucesso!')
        this.setState({ filtring: false })
        this.handleAllUsers();
      } catch (error) {
        console.log(`Ops: ${error.message}`)
      }
    }
    return
  }

  /*Input controlado nome do usuário*/
  onChangeInputName = (e) => {
    this.setState({ inputValueName: e.target.value })
  }

  /*Faz a requisição de busca de um usuário por nome, para a API*/
  searchUserName = async () => {
    const name = String(this.state.inputValueName)

    if (name === "") {
      this.setState({ filtring: false })
      this.handleAllUsers();
    } else {
      try {
        const res = await axios.get(`${baseUrl}/search?name=${name}&email=`, headerApi)
        this.setState({ filteredUsers: res.data, filtring: true, inputValueName: "" })

      } catch (error) {
        console.log(`Ops: ${error.message}`)
      }
    }
  }

  render() {
    return (
      <UsersContainer>
        <H2>Usuários Cadastrados:</H2>
        <ItemContainer>
          <Input 
            placeholder={"Buscar por nome"} 
            onChange={this.onChangeInputName} 
            value={this.state.inputValueName}
          />
          <Button onClick={this.searchUserName}>Buscar</Button>
        </ItemContainer>
        {this.state.filtring ? (
          this.state.filteredUsers.map(user => {
            return (
              <ItemContainer key={user.id}>
                <Content onClick={() => this.handleUser(user.id)}>{user.name}</Content>
                <Button onClick={() => this.deleteUser(user.id)}>APAGAR</Button>
              </ItemContainer>
            )
          })) : (
            this.state.users.map(user => {
              return (
                <ItemContainer key={user.id}>
                  <Content onClick={() => this.handleUser(user.id)}>{user.name}</Content>
                  <Button onClick={() => this.deleteUser(user.id)}>APAGAR</Button>
                </ItemContainer>
              )
            })
          )
        }
      </UsersContainer>
    )
  }
}