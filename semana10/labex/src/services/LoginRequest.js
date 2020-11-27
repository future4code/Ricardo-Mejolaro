import axios from 'axios';

/*Constantes*/
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont/login";

export default function loginRequest(email, password, event) {
  const body = {
    email,
    password
  }
  return axios.post(baseURL, body)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
    })
    .catch(error => {
      if (error.message.includes('401')) {
        alert('Ops, usuário e/ou senha inválidos!')
        event.preventDefault()
      } else {
        console.log(error.message)
      }
    })
}