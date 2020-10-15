import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';
import ListaCompetencias from './components/ListaCompetencias/ListaCompetencias';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://lh3.googleusercontent.com/ogw/ADGmqu8nGCsToz4-OCQSuk_6-97kwprrPw1ljQ8aA4U8=s32-c-mo"
          nome="Ricardo Mejolaro"
          descricao="Oi, eu sou o Ricardo. Sou Bacharel em Sistemas de Informação pela Universidade de Mogi das Cruzes.
          Sou Full Stack Web Developer, apaixonado por desenvolvimento web e suas possibilidades.
          E estou em constante evolução, sempre estudando as principais tecnologias do universo WEB."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={"https://img.icons8.com/fluent-systems-filled/48/000000/email-open.png"}
          titulo={'Email:'}
          conteudo={'ricardo.mejolaro@gmail.com'}
        />
        <CardPequeno
          imagem={"https://img.icons8.com/fluent-systems-filled/48/000000/order-delivered.png"}
          titulo={'Endereço:'}
          conteudo={'Rua Felicidade, 10.000'}
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="data:image/png;base64,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"
          nome="Pansa e Lancerotto Sociedade de Advogados"
          descricao="Nossa prioridade é o relacionamento direto e pessoal, tratanto cada caso de forma especializada."

        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFMqAcCyIHKPQ/company-logo_100_100/0?e=1610582400&v=beta&t=lOL_AO9LGBZqqENB9oJNHJy3zv6FahFUx8Vq4Twh_RE"
          nome="Atento Brasil SA"
          descricao="Somos líderes na América Latina, atendendo às maiores empresas em diferentes setores, incluindo: telecomunicações, finanças, saúde, varejo, governo e born-digitals, entre outras.!"
        />
      </div>

      <div className="page-section-container">
        <h2>Formação acadêmica</h2>
        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQFVh7MtpuYf3A/company-logo_100_100/0?e=1610582400&v=beta&t=GVIqzwdAMPKMz8DX8BR_8LnT3fhDRt9uO7j7RenyQyw"
          nome="Universidade de Mogi das Cruzes"
          descricao="Graduação, Sistemas de Informação, Formardo. 2015 - 2018."

        />

        <CardGrande
          imagem="https://media-exp1.licdn.com/dms/image/C4D0BAQGwg6B2WR3_vw/company-logo_100_100/0?e=1610582400&v=beta&t=1C1xVCHQEEVvfsZdYY7hilxJwVQ3-cQarDdgfX0CjbA"
          nome="Desenvolvimento Web Completo 2020"
          descricao="Concluído em junho/2020."
        />
      </div>

      <div className="page-section-container">
        <h2>Competências</h2>
        <ListaCompetencias competencia={"HTML5"} certificate={"https://img.icons8.com/ultraviolet/40/000000/certificate.png"}/>
        <ListaCompetencias competencia={"CSS3"} certificate={"https://img.icons8.com/ultraviolet/40/000000/certificate.png"}/>
        <ListaCompetencias competencia={"JAVASCRIPT"} certificate={"https://img.icons8.com/ultraviolet/40/000000/certificate.png"}/>
        <ListaCompetencias competencia={"NODEJS"} certificate={''}/>
        <ListaCompetencias competencia={"REACTJS"} certificate={''}/>
        <ListaCompetencias competencia={"REACTNATIVE"} certificate={''}/>
        <ListaCompetencias competencia={"POSTGRESQL"} certificate={"https://img.icons8.com/ultraviolet/40/000000/certificate.png"}/>
      </div>


      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem={"https://img.icons8.com/color/48/000000/instagram-new.png"}
          texto={"Instagram"}
        />

        <ImagemButton
          imagem={"https://img.icons8.com/windows/48/000000/github.png"}
          texto={"GitHub"}
        />
      </div>
    </div>
  );
}

export default App;
