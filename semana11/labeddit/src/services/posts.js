/*Serviços*/
import api from './api';

export const createPost = (body) => {

  api.post('/posts', body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(() => {
    //chamar a função de recarregar posts
  }).catch(error => {
    console.log(error.message)
  })
}