import React, { Component } from 'react';
import axios from 'axios';

import {
  UsersContainer,
  H2,
  ItemContainer,
  Content,
  Button
} from './styles'

export default class ViewUsers extends Component {
  state = {
    users: [],
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
      this.setState({users: res.data})
    }).catch(error => {
      alert(`Ops: ${error.message}`)
    })
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
        this.handleAllUsers();
      }).catch(error => {
        alert(`Ops: ${error.message}`)
      })
    }
    return
  }

  render() {
    return (
      <UsersContainer>
        <H2>Usuários Cadastrados:</H2>
        {this.state.users.map(user => {
          return <ItemContainer key={user.id}>
            <Content>{user.name}</Content>
            <Button onClick={() => this.deleteUser(user.id)}>X</Button>
          </ItemContainer>
        })}
      </UsersContainer>
    )
  }
}