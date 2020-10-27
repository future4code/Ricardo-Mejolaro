import React, { Component } from 'react';
import axios from 'axios';

import {
  UsersContainer,
  H2,
  ItemContainer,
  Label,
  Content,
  Input,
  Button
} from './styles'

export default class ViewUserDetails extends Component {
  state = {
    user: [],
    id: this.props.id,
    nameValue: '',
    emailValue: '',
    viewContent: true,
    viewInput: false
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

  clickUpdateUser = () => {
    this.setState({nameValue: this.state.user.name, emailValue: this.state.user.email})
    this.setState({viewContent: !this.state.viewContent, viewInput: !this.state.viewInput})
  }

  updateUser = () => {
    const body = {
      name: String(this.state.nameValue),
      email: String(this.state.emailValue)
    }
      axios.put(`https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${this.state.id}`, body, {
        headers: {
          Authorization: "ricardo-mejolaro-dumont"
        }
      }).then(res => {
        alert("Usuário alterado com sucesso!")
        this.setState({viewContent: !this.state.viewContent, viewInput: !this.state.viewInput})
        this.handleUser()
        
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
      <UsersContainer>
        <H2>Dados do usuário: </H2>
        {this.state.user.length > 0 ||
          <ItemContainer key={this.state.user.id}>
            <Label>Nome:</Label>
            {this.state.viewContent ? 
              <Content>{this.state.user.name}</Content>
              :
              <Input value={this.state.nameValue} onChange={this.onChangInputName}/>
            }   
            <Label>Email:</Label>
            {this.state.viewContent ? 
              <Content>{this.state.user.email}</Content>
              :
              <Input value={this.state.emailValue} onChange={this.onChangInputEmail}/>
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