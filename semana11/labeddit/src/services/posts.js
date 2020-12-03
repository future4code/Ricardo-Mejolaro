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
export const votePost = (body, id, update) => {
  api.put(`/posts/${id}/vote`, body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(() => {
    update.getAllPosts()
  }).catch(error => {
    console.log(error.message)
  })
}