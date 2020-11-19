import axios from 'axios';

/*Constantes*/
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont/trips";

export default function createTrip(form, event) {
  const body = {
    name: form.name,
    planet: form.planet,
    date: form.date,
    description: form.description,
    durationInDays: Number(form.durationInDays)
  }

  console.log(body)

  return axios.post(baseURL, body, {
    headers: {
      auth: localStorage.getItem('token')
    }
  })
    .then(() => {
      alert('Viagem cadastrada com sucesso!')
    })
    .catch(error => {
      if (error.message.includes('400')) {
        alert('Ops, verifique os dados enviados!')
        event.preventDefault()
      } else {
        console.log(error.message)
      }
    })
}