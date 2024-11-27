import "../styles/components/projetos.sass";
import Card1Img from "../img/recicla1.png";
import Card2Img from "../img/recicla2.png";
import Card3Img from "../img/game1.png";
import Card4Img from "../img/gamer2.png";
import Recicla3 from "../img/recicla3.png";
import Biblioteca1 from "../img/biblioteca1.png";
import Biblioteca2 from "../img/biblioteca2.png";
import Biblioteca3 from "../img/biblioteca3.png";
import Biblioteca4 from "../img/biblioteca4.png";
import Biblioteca5 from "../img/biblioteca5.png";
import Reciclacapa from "../img/reciclacapa7.png";
import Recicla5 from "../img/recicla5.png";


const cards = [
  { id: 1, title: "Reciclagem", description: "", images: [Reciclacapa, Card1Img, Card2Img, Recicla3, Recicla5] },
  { id: 2, title: "Gamer", description: "", images: [Card3Img, Card3Img, Card4Img] },
  { id: 3, title: "Biblioteca", description: "", images: [Biblioteca1, Biblioteca2, Biblioteca3, Biblioteca4, Biblioteca5] },
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
              <p className="card-description">{card.description}</p>
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
              <a href="#" className="modal-button">Ver no site</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projetos;
