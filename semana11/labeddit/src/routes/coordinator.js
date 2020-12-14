export const goToLogin = (history) => {
  history.push('/login')
}

export const goToSignUp = (history) => {
  history.push('/signup')
}

export const goToFeed = (history) => {
  history.push('/')
}

export const goToPostDetails = (history, id) => {
  history.push(`/post/${id}`)
}