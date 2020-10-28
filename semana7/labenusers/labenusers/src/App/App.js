import React, { Component } from 'react';

/*Componentes*/
import Header from '../components/Header/Header';
import Home from '../components/Home/Home';
import ViewUsers from '../components/ViewUses/ViewUsers';
import ViewUserDetails from '../components/ViewUserDetails/ViewUserDetails';

/*Tags Styleds*/
import {
  AppContainer,
  PageContainer,
  Section,
  Button
} from './styles'

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
      this.setState({ viewHome: false, viewUsers: true, viewUserDetails: false })
    } else {
      this.setState({ viewHome: !this.state.viewHome, viewUsers: !this.state.viewUsers })
    }
  }

  /*Controle de renderizações de componente detalhes do usuário, ao clicar*/
  changePageUser = (id) => {
    this.setState({ idView: id, viewHome: false, viewUsers: false, viewUserDetails: !this.state.viewUserDetails })
  }

  render() {
    return (
      <AppContainer>
        <Button onClick={this.changePage}>{this.state.viewHome ? 'Ver todos os usuários' : 'Voltar'}</Button>
        <PageContainer>
          {this.state.viewHome && (
              <Section>
                <Header
                  titlePrincipal={'LabenUsers!'}
                  subTitle={'Olá novamente!'}
                  title={'Não perca sua próxima oportunidade. Entre para os usuários da Labenu.'}
                />
                <Home />
              </Section>
            )
          }
          {this.state.viewUsers && (
              <Section>
                <Header
                  titlePrincipal={'LabenUsers!'}
                  subTitle={'Aqui todos os nossos usuários!'}
                  title={'Todos que já estão garantidos na próxima turma.'}
                />
                <ViewUsers changePage={this.changePageUser} />
              </Section>
            )
          }
          {this.state.viewUserDetails && (
              <Section>
                <Header
                  titlePrincipal={'LabenUsers!'}
                  subTitle={'Aqui os dados do usuário solicitado:'}
                  title={''}
                />
                <ViewUserDetails id={this.state.idView} changePage={this.changePage} />
              </Section>
            )
          }
        </PageContainer>
      </AppContainer>
    );
  }
}

