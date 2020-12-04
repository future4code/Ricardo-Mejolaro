/*Serviços*/
import api from './api';

const token = localStorage.getItem('token')

export const createPost = (body, update) => {

  api.post('/posts', body, {
    headers: {
      Authorization: token
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
      Authorization: token
    }
  }).then(() => {
    update.getAllPosts()
    update.updatedDetails(id)
    
  }).catch(error => {
    console.log(error.message)
  })
}

export const createComment = (body, id, update) => {

  api.post(`/posts/${id}/comment`, body, {
    headers: {
      Authorization: token
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
      Authorization: token
    }
  }).then(() => {
    update.updatedDetails(PostId)
    
  }).catch(error => {
    console.log(error.message)
  })
}

