/*Serviços*/
import api from './api';

export const createPost = (body, update) => {

  api.post('/posts', body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(() => {
    update.getAllPosts()
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
    update.updatedDetails(id)
    update.getAllPosts()
    
  }).catch(error => {
    console.log(error.message)
  })
}

export const createComment = (body, id, update) => {

  api.post(`/posts/${id}/comment`, body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(() => {
    update.updatedDetails(id)
  }).catch(error => {
    console.log(error.message)
  })
}

export const voteComment = (body, PostId, commentId, update) => {

  api.put(`/posts/${PostId}/comment/${commentId}/vote`, body, {
    headers: {
      Authorization: localStorage.getItem('token')
    }
  }).then(() => {
    update.updatedDetails(PostId)
    
  }).catch(error => {
    console.log(error.message)
  })
}

