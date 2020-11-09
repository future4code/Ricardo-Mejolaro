import React, { Component } from 'react';
import axios from 'axios';

/*Tags Styleds*/
import {
  PlaylistsContainer,
  Input,
  H2,
  ItemContainer,
  Content,
  Button
} from './styles'

/*Constantes reutilizáveis*/
const baseUrl = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists';
const headerApi = {
  headers: {
    Authorization: "ricardo-mejolaro-dumont"
  }
}

export default class ViewPlaylists extends Component {
  state = {
    playlists: [],
    inputValueName: "",
    filtring: false,
    filteredPlaylists: []
  }

  /*Chama a função de renderização de todos os playlists na construção do componente*/
  componentDidMount() {
    this.handleAllPlaylists();
  }

  /*Faz a requisição de todos os playlists para a API*/
  handleAllPlaylists = async () => {
    try {
      const res = await axios.get(baseUrl, headerApi)
      this.setState({ playlists: res.data.result.list })

    } catch (error) {
      console.log(`Ops: ${error.message}`)
    }
  }

  /*No clique em um nome de playlist essa função envia o id deste playlists via 
    props para o componente ViewUserDetails.
  */
  handlePlaylist = (id, name) => {
    this.props.changePage(id, name)
  }

  /*Faz a requisição de exclusão de um playlist para a API*/
  deletePlaylist = async (id) => {
    const check = window.confirm("Tem certeza que deseja apagar esta playlist?")
    if (check) {
      try {
        await axios.delete(`${baseUrl}/${id}`, headerApi)
        alert('Playlists deletada com sucesso!')
        this.setState({ filtring: false })
        this.handleAllPlaylists();
      } catch (error) {
        console.log(`Ops: ${error.message}`)
      }
    }
    return
  }

  /*Input controlado nome do playlist*/
  onChangeInputName = (e) => {
    this.setState({ inputValueName: e.target.value })
  }

  /*Faz a requisição de busca de um playlist por nome, para a API*/
  searchPlaylistName = async () => {
    const name = String(this.state.inputValueName)

    if (name === "") {
      this.setState({ filtring: false })
      this.handleAllPlaylists();
    } else {
      try {
        const res = await axios.get(`${baseUrl}/search?name=${name}`, headerApi)
        this.setState({ filteredPlaylists: res.data.result.playlist, filtring: true, inputValueName: "" })

      } catch (error) {
        console.log(`Ops: ${error.message}`)
      }
    }
  }

  render() {
    return (
      <PlaylistsContainer>
        <H2>Playlists:</H2>
        <ItemContainer>
          <Input 
            placeholder={"Buscar por nome"} 
            onChange={this.onChangeInputName} 
            value={this.state.inputValueName}
          />
          <Button onClick={this.searchPlaylistName}>Buscar</Button>
        </ItemContainer>
        {this.state.filtring ? (
          this.state.filteredPlaylists.map(playlist => {
            return (
              <ItemContainer key={playlist.id}>
                <Content onClick={() => this.handlePlaylist(playlist.id, playlist.name)}>{playlist.name}</Content>
                <Button onClick={() => this.deletePlaylist(playlist.id)}>APAGAR</Button>
              </ItemContainer>
            )
          })) : (
            this.state.playlists.map(playlist => {
              return (
                <ItemContainer key={playlist.id}>
                  <Content onClick={() => this.handlePlaylist(playlist.id, playlist.name)}>{playlist.name}</Content>
                  <Button onClick={() => this.deletePlaylist(playlist.id)}>APAGAR</Button>
                </ItemContainer>
              )
            })
          )
        }
      </PlaylistsContainer>
    )
  }
}