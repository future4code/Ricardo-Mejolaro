import axios from 'axios';

/*Constantes*/
const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/ricardo-mejolaro-dumont/trips";

export default function applyToTrip(form, event) {
  const id = form.tripId
  const body = {
    name: form.name,
    age: Number(form.age),
    applicationText: form.applicationText,
    profession: form.profession,
    country: form.country
  }

  console.log(id)

  return axios.post(`${baseURL}/${id}/apply`, body)
    .then(() => {
      alert('Inscrição efetuada com sucesso!')
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