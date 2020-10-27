import React, { Component } from 'react';
import axios from 'axios';

import {
  UsersContainer,
  Input,
  H2,
  ItemContainer,
  Content,
  Button
} from './styles'

export default class ViewUsers extends Component {
  state = {
    users: [],
    inputValueName: "",
    filtring: false,
    filteredUsers: [] 
  }

  componentDidMount() {
    this.handleAllUsers();
  }

  handleAllUsers = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
      headers: {
        Authorization: "ricardo-mejolaro-dumont"
      }
    }).then(res => {
      this.setState({ users: res.data })
    }).catch(error => {
      alert(`Ops: ${error.message}`)
    })
  }

  handleUser = (id) => {
    this.props.changePage(id)
  }

  deleteUser = (id) => {
    const check = window.confirm("Tem certeza que deseja apagar este usuário?")
    if (check) {
      axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`, {
        headers: {
          Authorization: "ricardo-mejolaro-dumont"
        }
      }).then(res => {
        alert('Usuário deletado com sucesso!')
        this.setState({ filtring: false })
        this.handleAllUsers();
      }).catch(error => {
        alert(`Ops: ${error.message}`)
      })
    }
    return
  }

  onChangeInputName = (e) => {
    this.setState({ inputValueName: e.target.value })
  }

  searchUserName = () => {
    const name = String(this.state.inputValueName)

    if(name === "") {
      this.setState({ filtring: false })
      this.handleAllUsers();
    } else {
      axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}&email=`, {
        headers: {
          Authorization: "ricardo-mejolaro-dumont"
        }
      }).then(res => {
        this.setState({ filteredUsers: res.data, filtring: true, inputValueName: ""})
      }).catch(error => {
        alert(`Ops: ${error.message}`)
      })
    }
  }

  render() {
    return (
      <UsersContainer>
        <H2>Usuários Cadastrados:</H2>
        <ItemContainer>
          <Input placeholder={"Buscar por nome"} onChange={this.onChangeInputName} value={this.state.inputValueName} />
          <Button onClick={this.searchUserName}>Buscar</Button>
        </ItemContainer>
        {this.state.filtring ?
          this.state.filteredUsers.map(user => {
            return <ItemContainer key={user.id}>
              <Content onClick={() => this.handleUser(user.id)}>{user.name}</Content>
              <Button onClick={() => this.deleteUser(user.id)}>APAGAR</Button>
            </ItemContainer>
          }) :
          this.state.users.map(user => {
            return <ItemContainer key={user.id}>
              <Content onClick={() => this.handleUser(user.id)}>{user.name}</Content>
              <Button onClick={() => this.deleteUser(user.id)}>APAGAR</Button>
            </ItemContainer>
          })
        }
      </UsersContainer>
    )
  }
}