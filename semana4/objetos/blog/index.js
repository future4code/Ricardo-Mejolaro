let posts = [];

function createPost() {
  
  let title = document.querySelector('#titulo-post').value;
  let author = document.querySelector('#autor-post').value;
  let content = document.querySelector('#conteudo-post').value;
  let divPost = document.querySelector('#container-de-posts');
  divPost.innerHTML = "";

  const post = {
    title,
    author,
    content
  }

  posts.push(post);
  
  document.querySelector('#titulo-post').value = "";
  document.querySelector('#autor-post').value = "";
  document.querySelector('#conteudo-post').value = "";

  for (const post of posts) {
    divPost.innerHTML += `
      <h3>Título: ${post.title}</h3>\n
      <span>Autor: ${post.author}</span>\n
      <p>Conteúdo: ${post.content}</p>
    `
  }
  
  console.log(posts)
  

}


