import React, { Component } from 'react';

/*Componentes*/
import Header from '../components/Header/Header';
import CreatePlaylist from '../components/CreatePlaylist/CreatePlaylist';
import ViewPlaylists from '../components/ViewPlaylists/ViewPlaylists';
import ViewPlaylistDetails from '../components/ViewPlaylistDetails/ViewPlaylistDetails';

/*Tags Styleds*/
import {
  AppContainer,
  PageContainer,
  Section,
  Button
} from './styles'

export default class App extends Component {
  state = {
    viewCreatePlaylist: true,
    viewPlaylists: false,
    viewPlaylistDetails: false,
    idView: 0,
    playlistName: ''
  }

  /*Controle de renderizações de componentes*/
  changePage = () => {
    if (this.state.viewPlaylistDetails) {
      this.setState({ viewCreatePlaylist: false, viewPlaylists: true, viewPlaylistDetails: false })
    } else {
      this.setState({ viewCreatePlaylist: !this.state.viewCreatePlaylist, viewPlaylists: !this.state.viewPlaylists })
    }
  }

  /*Controle de renderizações de componente detalhes da playlist, ao clicar*/
  changePageUser = (id, name) => {
    this.setState({ idView: id, playlistName: name, viewCreatePlaylist: false, viewPlaylists: false, viewPlaylistDetails: !this.state.viewPlaylistDetails })
  }

  render() {
    return (
      <AppContainer>
        <Button onClick={this.changePage}>{this.state.viewCreatePlaylist ? 'Ver Playlists' : 'Voltar'}</Button>
        <PageContainer>
          {this.state.viewCreatePlaylist && (
              <Section>
                <Header
                  titlePrincipal={'Bem vindo ao Labefy!'}
                  subTitle={'O seu App de músicas preferido!'}
                  title={'Aqui suas playlists estão disponíveis onde você estiver!'}
                />
                <CreatePlaylist />
              </Section>
            )
          }
          {this.state.viewPlaylists && (
              <Section>
                <Header
                  titlePrincipal={'Labefy!'}
                  subTitle={'Aqui todas as suas playlists!'}
                  title={'Bem guardadinhas, sempre disponíveis para você!'}
                />
                <ViewPlaylists changePage={this.changePageUser} />
              </Section>
            )
          }
          {this.state.viewPlaylistDetails && (
              <Section>
                <Header
                  titlePrincipal={'Labefy!'}
                  subTitle={'Aqui as músicas desta playlist: '}
                  title={''}
                />
                <ViewPlaylistDetails id={this.state.idView} playlistName={this.state.playlistName} changePage={this.changePage} />
              </Section>
            )
          }
        </PageContainer>
      </AppContainer>
    );
  }
}

