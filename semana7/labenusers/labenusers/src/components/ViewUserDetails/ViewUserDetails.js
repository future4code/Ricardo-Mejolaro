import React, { Component } from 'react';
import axios from 'axios';

import {
  UsersContainer,
  H2,
  ItemContainer,
  Label,
  Content,
  Button
} from './styles'

export default class ViewUserDetails extends Component {
  state = {
    user: [],
    id: this.props.id
  }

  componentDidMount() {
      this.handleUser()
  }

  handleUser = () => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.id}`, {
      headers: {
        Authorization: "ricardo-mejolaro-dumont"
      }
    }).then(res => {
      console.log(res.data)
      this.setState({ user: res.data })
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
        this.props.changePage()

      }).catch(error => {
        alert(`Ops: ${error.message}`)
      })
    }
    return
  }

  render() {
    return (
      <UsersContainer>
        <H2>Dados do usuário: </H2>
        {this.state.user.length > 0 ||
          <ItemContainer key={this.state.user.id}>
            <Label>Nome:</Label>
            <Content>{this.state.user.name}</Content>
            <Label>Email:</Label>
            <Content>{this.state.user.email}</Content>
            <Button onClick={() => this.deleteUser(this.state.user.id)}>X</Button>
          </ItemContainer>
        }
      </UsersContainer>
    )
  }
}