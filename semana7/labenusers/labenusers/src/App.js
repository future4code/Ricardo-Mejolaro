import React, { Component } from 'react';
import styled from 'styled-components';

import Home from './components/Home/Home';
import ViewUsers from './components/ViewUses/ViewUsers';
import ViewUserDetails from './components/ViewUserDetails/ViewUserDetails';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr;
`

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px auto;
`

export const Button = styled.button`
  background-color: #111;
  color: #FFF;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 10px;
  padding: 10px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  outline: none;
  justify-self: flex-start;

  &:hover {
    background-color: green;
  }
`

export default class App extends Component {
  state = {
    viewHome: true,
    viewUsers: false,
    viewUserDetails: false,
    idView: 0
  }

  changePage = () => {
    if (this.state.viewUserDetails) {
      this.setState({viewHome: false, viewUsers: true})
      this.setState({viewUserDetails: false})
    } else {
      this.setState({viewHome: !this.state.viewHome, viewUsers: !this.state.viewUsers})
    }
  }

  changePageUser = (id) => {
    this.setState({idView: id})
    this.setState({viewHome: false, viewUsers: false, viewUserDetails: !this.state.viewUserDetails})
  }

  render() {
    return (
      <AppContainer>
        <Button onClick={this.changePage}>{this.state.viewHome ? 'Ver todos os usuários' : 'Voltar'}</Button>
        <PageContainer>
          {this.state.viewHome &&
            <Home />
          }
          {this.state.viewUsers &&
            <ViewUsers changePage={this.changePageUser}/>
          }
          {this.state.viewUserDetails &&
            <ViewUserDetails id={this.state.idView} changePage={this.changePage}/>
          }
        </PageContainer>
      </AppContainer>
    );
  }
}

