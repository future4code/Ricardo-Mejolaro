function createPost() {
  
  let title = document.querySelector('#titulo-post').value;
  let author = document.querySelector('#autor-post').value;
  let content = document.querySelector('#conteudo-post').value;
  let image = document.querySelector('#imagem-post').value;
  

  if (title === "" || author === "" || content === "") {
    alert('Preencha os campos obrigatórios!');
    return
  }

  const post = {
    title,
    author,
    content,
    image
  }

  if (localStorage.getItem('items') === null) {
    // Adicionando um array com um objeto no localstorage
    localStorage.setItem('items', JSON.stringify([post]));
  } else {
    // Copiando o array existente no localstorage e adicionando o novo objeto ao final.
    localStorage.setItem(
      'items',
      // O JSON.parse transforma a string em JSON novamente, o inverso do JSON.strigify
      JSON.stringify([
        ...JSON.parse(localStorage.getItem('items')),
        post
      ])
    );
  }
  
  document.querySelector('#titulo-post').value = "";
  document.querySelector('#autor-post').value = "";
  document.querySelector('#conteudo-post').value = "";
  document.querySelector('#imagem-post').value = "";

  window.location.href = "http://127.0.0.1:5500/posts.html";

}

function carregaPosts() {
  let divPost = document.querySelector('#container-de-posts');
  const items = JSON.parse(localStorage.getItem('items'));

  if (items) {
    for (const post of items) {
      divPost.innerHTML += `
      <div>
        <img src=${post.image || "http://placehold.it/300x190?text=POST-SEM-FOTO"}>\n
        <h3>Título: ${post.title}</h3>\n
        <span>Autor: ${post.author}</span>\n
        <p>Conteúdo: ${post.content}</p>
      </div>
    `
    }
  }
}

carregaPosts();


