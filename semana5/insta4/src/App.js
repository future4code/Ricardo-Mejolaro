import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {
  render() {
    return (
      <div className={'app-container'}>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/id/1004/50/50'}
          fotoPost={'https://picsum.photos/id/1011/200/150'}
        />
        <Post
          nomeUsuario={'mejolaro'}
          fotoUsuario={'https://picsum.photos/id/1005/50/50'}
          fotoPost={'https://picsum.photos/id/1/200/150'}
        />
        <Post
          nomeUsuario={'nayara'}
          fotoUsuario={'https://picsum.photos/id/1006/50/50'}
          fotoPost={'https://picsum.photos/id/1008/200/150'}
        />
      </div>
    );
  }
}

export default App;
