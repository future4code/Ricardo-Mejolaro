import React, { Component } from 'react';
import axios from 'axios';

/*Tags Styleds*/
import {
  PlaylistContainer,
  ItemContainer,
  Label,
  Content,
  TracksContainer,
  ViewTrackContainer,
  ViewTrack,
  Audio,
  IconImage,
  AddTracksContainer,
  Input,
  Button
} from './styles'

/*Constantes reutilizáveis*/
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
const headerApi = {
  headers: {
    Authorization: "ricardo-mejolaro-dumont"
  }
}
const deleteIcon = 'https://img.icons8.com/flat_round/40/000000/delete-sign.png';

export default class ViewPlaylistDetails extends Component {
  state = {
    tracks: [],
    id: this.props.id,
    name: this.props.playlistName,
    nameTrackValue: "",
    artistTrackValue: "",
    urlTrackValue: ""
  }

  /*Chama a função de renderização do playlist na construção do componente*/
  componentDidMount() {
    this.handlePlaylist()
  }

  /*Faz a requisição de um playlist para a API*/
  handlePlaylist = async () => {
    try {
      const res = await axios.get(`${baseUrl}/${this.state.id}/tracks`, headerApi)
      this.setState({ tracks: res.data.result.tracks })

    } catch (error) {
      console.log(`Ops: ${error.message}`)
    }
  }

  /*Faz a requisição de adicionar uma música na playlist para a API*/
  addTrackToPlaylist = async () => {
    const body = {
      name: String(this.state.nameTrackValue),
      artist: String(this.state.artistTrackValue),
      url: String(this.state.urlTrackValue),
    }
    try {
      await axios.post(`${baseUrl}/${this.state.id}/tracks`, body, headerApi)
      alert("Música adicionada com sucesso!")
      this.setState({ nameTrackValue: "", artistTrackValue: "", urlTrackValue: "" })
      this.handlePlaylist()

    } catch (error) {
      const messageError = error.message.includes('400');
      if(messageError) {
        alert(`Para incluir é necessário preencher todos os campos corretamente!`)
      }
      console.log(`Ops: ${error.message}`)
    }
  }

    /*Faz a requisição de exclusão de um usuário para a API*/
    deleteTrackPlaylist = async (id, trackId) => {
      const check = window.confirm("Tem certeza que deseja apagar esta música?")
      if (check) {
        try {
          await axios.delete(`${baseUrl}/${id}/tracks/${trackId}`, headerApi)
          alert('Música apagada com sucesso!')
          this.handlePlaylist();
        } catch (error) {
          console.log(`Ops: ${error.message}`)
        }
      }
      return
    }

  /*Input controlado nome da música*/
  onChangInputNameTrackValue = (e) => {
    this.setState({ nameTrackValue: e.target.value })
  }
  /*Input controlado artista da música*/
  onChangInputUrlTrackValue = (e) => {
    this.setState({ artistTrackValue: e.target.value })
  }
  /*Input controlado url da música*/
  onChangInputArtistTrackValue = (e) => {
    this.setState({ urlTrackValue: e.target.value })
  }

  render() {
    return (
      <PlaylistContainer>
        <ItemContainer key={this.state.tracks.id}>
          <Label>Nome playlist:</Label>
          <Content>{this.state.name}</Content>

          <Label>Musicas:</Label>
          <TracksContainer>
            {this.state.tracks.length > 0 ?
              this.state.tracks.map(music => {
                return (
                  <ViewTrackContainer key={music.id}>
                    <ViewTrack>{music.name} ♫</ViewTrack>
                    <Audio src={music.url} controls></Audio>
                    <IconImage src={deleteIcon} onClick={() => this.deleteTrackPlaylist(this.state.id, music.id)} />
                  </ViewTrackContainer>

                )
              }) :
              <ViewTrackContainer>
                <h2>Ops! Ainda não temos músicas! Adicione abaixo ;)</h2>
              </ViewTrackContainer>
            }
          </TracksContainer>

          <Label>Adicionar músicas:</Label>
          <AddTracksContainer>
            <Input
              placeholder={'Digite o nome da música'}
              value={this.state.nameTrackValue}
              onChange={this.onChangInputNameTrackValue}
            />
            <Input
              placeholder={'Digite o nome do artista ou banda'}
              value={this.state.artistTrackValue}
              onChange={this.onChangInputUrlTrackValue}
            />
            <Input
              placeholder={'Digite a url da música'}
              value={this.state.urlTrackValue}
              onChange={this.onChangInputArtistTrackValue}
            />
            <Button onClick={this.addTrackToPlaylist}>Adicionar Música</Button>
          </AddTracksContainer>
        </ItemContainer>
      </PlaylistContainer>
    )
  }
}