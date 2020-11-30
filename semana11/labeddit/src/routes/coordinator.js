export const goToLogin = (history) => {
  history.push('/entrar')
}

export const goToSignUp = (history) => {
  history.push('/cadastrar-se')
}

export const goToFeed = (history) => {
  history.push('/')
}

export const goToPostDetails = (history, id) => {
  history.push(`/postagem/${id}`)
}