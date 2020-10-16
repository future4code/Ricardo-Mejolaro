import React from 'react';
import styled from 'styled-components'
import './App.css';

import Post from './components/Post/Post';

const DivNovoPost = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  padding: 20px;
  width: 300px;
`
const DivItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`
const Input = styled.input`
  width: 100%;
  height: 30px;
  border-radius: 5px;

  box-sizing: border-box;
`

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
`

class App extends React.Component {
  state = {
    posts: [
      {
        nomeUsuario: 'paulinha',
        fotoUsuario: 'https://picsum.photos/id/1004/50/50',
        fotoPost: 'https://picsum.photos/id/1011/200/150'
      },
      {
        nomeUsuario: 'mejolaro',
        fotoUsuario: 'https://picsum.photos/id/1005/50/50',
        fotoPost: 'https://picsum.photos/id/1/200/150'
      },
      {
        nomeUsuario: 'nayara',
        fotoUsuario: 'https://picsum.photos/id/1006/50/50',
        fotoPost: 'https://picsum.photos/id/1008/200/150'
      },
    ],
    valorInputNomeUsuario: "",
    valorInputFotoUsuario: "",
    valorInputFotoPost: ""
  }

  /*Criando novo POST */
  adicionaPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };

    if (novoPost.nomeUsuario === '' || novoPost.fotoUsuario === '' || novoPost.fotoPost === '') {
      return alert('Preencha todos os campos!')
    }

    /*Adicionando novo Post ao fim do novo array */
    const novosPosts = [...this.state.posts, novoPost];
    /* Atualiza o estado "posts" como a variavel "novosPosts" */
    this.setState({ posts: novosPosts });

    /*Após atualizar o state posts limpa os imputs */
    this.setState({ valorInputNomeUsuario: "" });
    this.setState({ valorInputFotoUsuario: "" });
    this.setState({ valorInputFotoPost: "" });
  };

  /*Acompanhando e pegando os valores que são digitados nos inputs */
  onChangeInputNome = (event) => {
    /* Essa função é chamada toda vez que algo é digitado no input de nome */
    // e atualiza o valor do estado 
    this.setState({ valorInputNomeUsuario: event.target.value });
  };
  onChangeInputFotoUsuario = (event) => {
    /* Essa função é chamada toda vez que algo é digitado no input de Foto usuário */
    // e atualiza o valor do estado 
    this.setState({ valorInputFotoUsuario: event.target.value });
  };
  onChangeInputFotoPost = (event) => {
    /* Essa função é chamada toda vez que algo é digitado no input de Foto Post */
    // e atualiza o valor do estado 
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {
    return (
      <div className={'app-container'}>
        <h1>Novo Post</h1>
        <DivNovoPost>
          <DivItem>
            <Label htmlFor="nome">Nome: </Label>
            <Input
              value={this.state.valorInputNomeUsuario}
              onChange={this.onChangeInputNome}
              id="nome"
            />
          </DivItem>
          <DivItem>
            <Label htmlFor="fotoPerfil">Foto Perfil: </Label>
            <Input
              value={this.state.valorInputFotoUsuario}
              onChange={this.onChangeInputFotoUsuario}
              placeholder={"http://"}
              id="fotoPerfil"
            />
          </DivItem>
          <DivItem>
            <Label htmlFor="fotoPostagem">Foto Postagem: </Label>
            <Input
              value={this.state.valorInputFotoPost}
              onChange={this.onChangeInputFotoPost}
              placeholder={"http://"}
              id="fotoPostagem"
            />
          </DivItem>
          <Button onClick={this.adicionaPost}>Postar</Button>
        </DivNovoPost>

        <h2>Postagens: </h2>
        {this.state.posts.map(post => {
          return (
            <Post
              nomeUsuario={post.nomeUsuario}
              fotoUsuario={post.fotoUsuario}
              fotoPost={post.fotoPost}
            />
          )
        })}
      </div>
    );
  }
}

export default App;
