import React, { Component } from 'react';

/*Componentes*/
import Home from '../components/Home/Home';
import ViewUsers from '../components/ViewUses/ViewUsers';
import ViewUserDetails from '../components/ViewUserDetails/ViewUserDetails';

/*Tags Styleds*/
import {AppContainer, PageContainer, Button} from './styles'

export default class App extends Component {
  state = {
    viewHome: true,
    viewUsers: false,
    viewUserDetails: false,
    idView: 0
  }

  /*Controle de renderizações de componentes*/
  changePage = () => {
    if (this.state.viewUserDetails) {
      this.setState({viewHome: false, viewUsers: true, viewUserDetails: false})
    } else {
      this.setState({viewHome: !this.state.viewHome, viewUsers: !this.state.viewUsers})
    }
  }

  /*Controle de renderizações de componente detalhes do usuário, ao clicar*/
  changePageUser = (id) => {
    this.setState({idView: id, viewHome: false, viewUsers: false, viewUserDetails: !this.state.viewUserDetails})
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

