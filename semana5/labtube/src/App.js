import React from 'react';

/*Icons*/
import Lines from './img/grip-lines.png';
import Logo from './img/logo.png';
import Search from './img/search.png';
import Home from './img/home.png';
import Fire from './img/fire.png';
import Registrations from './img/registrations.png';
import Library from './img/library.png';
import History from './img/history.png';

/*Mini imagens */
import Video from './img/video.jpg';
import Video1 from './img/video1.jpg';
import Video2 from './img/video2.jpg';
import Video3 from './img/video3.jpg';
import Video4 from './img/video4.jpg';
import Video6 from './img/video6.jpg';

import './App.css';

function App() {
  const titulo = "Canções De Rock Acústico Anos 80 90 2000 | Melhor Playlist De Rock De Todos Os Tempos";
  const titulo1 = "🚨 Estou Quebrando Duas Regras Pra Antecipar Uma Aula da NLW#3 da Rocketseat (Full Stack)";
  const titulo2 = "O CONSELHO QUE QUERIA TER RECEBIDO QUANDO COMECEI A PROGRAMAR...";
  const titulo3 = "🎧 💻 MUSIC FOR PROGRAMMING | 📙 Music for INSPIRATION";
  const titulo4 = "🚨 LANÇAMENTO ⚠️ Curso de HTML5 e CSS3 atualizado 2020";
  const titulo5 = "Um júnior já deveria saber como reduzir a quantidade de IFs de um código (e você, sabe?)";
  const titulo6 = "Simple Nike Shoe Responsive Landing Page Design using Html CSS Only | Website Design";
  const titulo7 = "Descobri Como Consertar o Meu Maior Problema";

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <div>
      <div className="tela-inteira">
        <header>
          <img src={Lines} alt="Menu avançado" />
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <h1>LabTube</h1>
          </div>
          <div className="search">
            <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
            <div>
              <img src={Search} alt="Pesquisar" />
            </div>
          </div>
        </header>

        <main>
          <nav className="menu-vertical">
            <div className="botoes-menu-vertical active">
              <img src={Home} alt="Página inicial" />
              <span>Início</span>
            </div>
            <div className="botoes-menu-vertical">
              <img src={Fire} alt="Em alta" />
              <span>Em alta</span>
            </div>
            <div className="botoes-menu-vertical">
              <img src={Registrations} alt="Inscrições" />
              <span>Inscrições</span>
            </div>
            <div className="botoes-menu-vertical">
              <img src={Library} alt="Originais" />
              <span>Originais</span>
            </div>
            <div className="botoes-menu-vertical">
              <img src={History} alt="Histórico" />
              <span>Histórico</span>
            </div>
          </nav>

          <section className="painel-de-videos">
            <div className="box-pagina-principal media1" onClick={reproduzVideo}>
              <iframe src="https://www.youtube.com/embed/KS2oecN-aVU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                <img src={Video} alt="Canções de Rock Acústico" />
                <h4>{titulo}</h4>
              </div>
            </div>
            <div className="box-pagina-principal media2" onClick={reproduzVideo}>
              <iframe src="https://www.youtube.com/embed/BygNjMpVJlU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                <img src={Video1} alt="Estou Quebrando Duas Regras" />
                <h4>{titulo1}</h4>
              </div>
            </div>
            <div className="box-pagina-principal media3" onClick={reproduzVideo}>
              <iframe src="https://www.youtube.com/embed/byxkMq0w9B4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                <img src={Video2} alt="O CONSELHO QUE QUERIA TER RECEBIDO" />
                <h4>{titulo2}</h4>
              </div>
            </div>
            <div className="box-pagina-principal media4" onClick={reproduzVideo}>
              <iframe src="https://www.youtube.com/embed/wgNSecI69XQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                <img src={Video3} alt="MUSIC FOR PROGRAMMING" />
                <h4>{titulo3}</h4>
              </div>
            </div>
            <div className="box-pagina-principal media5" onClick={reproduzVideo}>
              <iframe src="https://www.youtube.com/embed/9nBa_5p6stc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                <img src={Video4} alt="Curso HTML5 e CSS3" />
                <h4>{titulo4}</h4>
              </div>
            </div>
            <div className="box-pagina-principal media6" onClick={reproduzVideo}>
              <iframe src="https://www.youtube.com/embed/Lf3ZV0UsnEo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                <img src={Video1} alt="Um júnior já deveria" />
                <h4>{titulo5}</h4>
              </div>
            </div>
            <div className="box-pagina-principal media7" onClick={reproduzVideo}>
              <iframe src="https://www.youtube.com/embed/QYGiaJ165gA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                <img src={Video6} alt="Simple Nike Shoe Responsive Landing Page" />
                <h4>{titulo6}</h4>
              </div>
            </div>
            <div className="box-pagina-principal media8" onClick={reproduzVideo}>
              <iframe src="https://www.youtube.com/embed/rHANBi7E2cI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <div>
                <img src={Video1} alt="Preguiça" />
                <h4>{titulo7}</h4>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
