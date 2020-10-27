import React, { Component } from 'react';
import styled from 'styled-components';

import Home from './components/Home/Home';
import ViewUsers from './components/ViewUses/ViewUsers';

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const PageContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
`

export const Button = styled.button`
  width: 30%;
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
  align-self: flex-start;

  &:hover {
    background-color: green;
  }
`

export default class App extends Component {
  state = {
    viewHome: true,
    viewUsers: false
  }

  changePage = () => {
    this.setState({viewHome: !this.state.viewHome, viewUsers: !this.state.viewUsers})
  }

  render() {
    return (
      <AppContainer>
        <Button onClick={this.changePage}>{this.state.viewHome ? 'Ver todos os usuários' : 'Voltar página de cadastro'}</Button>
        <PageContainer>
          {this.state.viewHome &&
            <Home />
          }
          {this.state.viewUsers &&
            <ViewUsers />
          }
        </PageContainer>
      </AppContainer>
    );
  }
}

