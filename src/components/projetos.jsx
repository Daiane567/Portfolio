import "../styles/components/projetos.sass";
import Card1Img from "../img/recicla1.png";
import Card2Img from "../img/recicla2.png";
import Card3Img from "../img/game1.png";
import Recicla3 from "../img/recicla3.png";
import Biblioteca1 from "../img/biblioteca1.png";
import Biblioteca2 from "../img/biblioteca2.png";
import Biblioteca3 from "../img/biblioteca3.png";
import Biblioteca4 from "../img/biblioteca4.png";
import Biblioteca5 from "../img/biblioteca5.png";
import Reciclacapa from "../img/capaRe.png";
import Recicla5 from "../img/recicla5.png";
import Login from "../img/login.png";
import NovoJogo from "../img/novojogo.png";
import Usuario from "../img/usuario.png";
import Grupo7 from "../img/grupo7.png";
import Grupo2 from "../img/grupo2.png";
import RecuperaSenha from "../img/recuperaSenha.png";







const cards = [
  { 
    id: 1, 
    title: "Gamer", 
    description: "Desenvolvimento de uma Aplicação Distribuída de uma pagina web e um aplicativo móvel onde é possível realizar o resgate de jogos disponíbilizados no site por desenvolvedores de jogos de forma gratuida e limitada de download. Os jogos resgatados, ficarão disponíveis na biblioteca de jogos do usuário dentro do site ou do aplicativo.", 
    images: [Card3Img, Login, RecuperaSenha, NovoJogo, Usuario, Grupo7, Grupo2] 
  },
  { 
    id: 2, 
    title: "Reciclagem", 
    description: "O referido projeto trata de uma ferramenta que possibilita resolver o problema da destinação incorreta dos materiais descartados, bem como da falta de informação sobre locais de coleta de resíduos recicláveis e eletrônicos", 
    images: [Reciclacapa, Card1Img, Card2Img, Recicla3, Recicla5] 
  },
  { 
    id: 3, 
    title: "Biblioteca", 
    description: "Desenvolvimento de um aplicativo onde será possível realizar o empréstimo de livros. Tal sistema tem por finalidade controlar entrada e saída de acervos, controle de usuários e emissão de relatórios gerenciais. O sistema deve facilitar o gerenciamento da biblioteca, tornando os processos mais ágeis e eficazes, trazendo benefícios para os alunos e para a escola.", 
    images: [Biblioteca1, Biblioteca2, Biblioteca3, Biblioteca4, Biblioteca5] 
  },
];

import { useState } from "react";

const Projetos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (card) => {
    setCurrentCard(card);
    setModalIsOpen(true);
    setCurrentImageIndex(0); // Resetar para a primeira imagem
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setCurrentCard(null);
  };

  const nextImage = () => {
    if (currentCard) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % currentCard.images.length);
    }
  };

  const prevImage = () => {
    if (currentCard) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? currentCard.images.length - 1 : prevIndex - 1
      );
    }
  };
  

  return (
    <section className="cards-container">
      <h2>Projetos</h2>
      <div className="cards-grid">
        {cards.map((card) => (
          <div className="card" key={card.id} onClick={() => openModal(card)}>
            <img src={card.images[0]} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              {/* Removemos a descrição aqui para que ela não apareça no card */}
            </div>
          </div>
        ))}
      </div>

      {modalIsOpen && currentCard && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="modal-close" onClick={closeModal}>X</button>
            <div className="modal-gallery">
              <img src={currentCard.images[currentImageIndex]} alt={currentCard.title} className="modal-image" />
              <div className="modal-navigation">
                <button onClick={prevImage}>Anterior</button>
                <button onClick={nextImage}>Próximo</button>
              </div>
            </div>
            <div className="modal-content">
              <h2>{currentCard.title}</h2>
              <p>{currentCard.description}</p>
              {/*<a href="#" className="modal-button">Ver no site</a>*/}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projetos;
