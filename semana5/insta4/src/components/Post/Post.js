import React from 'react'
import styled from 'styled-components';

import { IconeComContador } from '../IconeComContador/IconeComContador'
import { Icone } from '../Icone/Icone'

import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeComentario from '../../img/comment_icon.svg'
import iconeMarcacaoPreto from '../../img/marking.svg'
import iconeMarcacaoBranco from '../../img/marking-white.svg'
import iconeCompartilhamento from '../../img/to-share.png'

import { SecaoComentario } from '../SecaoComentario/SecaoComentario'
import { SecaoCompartilhamento } from '../SecaoCompartilhamento/SecaoCompartilhamento'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`
const PostPhoto = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
`
const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    compartilhando: false,
    numeroComentarios: 0,
    marcacao: false,
    comentarios: ""
  }

  onClickCurtida = () => {
    this.setState({
      curtido: !this.state.curtido
    });

    if (!this.state.curtido) {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas + 1
      });
    } else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1
      });
    }
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1,
    })
  }

  onClickMarcacao = () => {
    this.setState({
      marcacao: !this.state.marcacao
    });
  }

  onClickCompartilhamento = () => {
    this.setState({
      compartilhando: !this.state.compartilhando
    })
  }

  aoEnviarCompartilhamento = () => {
    this.setState({
      compartilhando: false
    })
  }



  render() {
    let iconeCurtida

    if (this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeMarcacao

    if (this.state.marcacao) {
      iconeMarcacao = iconeMarcacaoPreto
    } else {
      iconeMarcacao = iconeMarcacaoBranco
    }

    let componenteComentario

    if (this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario} />
    }

    let componenteCompartilhando

    if (this.state.compartilhando) {
      componenteCompartilhando = <SecaoCompartilhamento aoEnviar={this.aoEnviarCompartilhamento} />
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'} />
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'} />

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />

        <Icone
          icone={iconeCompartilhamento}
          onClickIcone={this.onClickCompartilhamento}
        />

        <Icone
          icone={iconeMarcacao}
          onClickIcone={this.onClickMarcacao}
        />
      </PostFooter>
      {componenteComentario}
      {componenteCompartilhando}
    </PostContainer>
  }
}

export default Post