import React from 'react';
import '../CSS/Redes Sociais/Linkedin/linkedin.css'; // Novo arquivo CSS

import iconeDaPagina from '../img/iconeDaPagina.png'
import banner from '../img/ImgLinkedin/banner.jpg'

import destaque1 from '../img/ImgLinkedin/ambiente1.jpg'

import destaque2 from '../img/ImgLinkedin/imagemEntrada.jpg'
import destaque3 from '../img/ImgLinkedin/reserva.jpg'
import destaque4 from '../img/ImgLinkedin/sashimiPremium.jpg'


const LinkedinRestauranteJaponesBonito = () => {
  return (
    <div className="linkedin-page-bonito">
      {/* Seção de Perfil com Banner */}
      <header className="profile-header-bonito">
        <div className="banner-image">
          <img src={banner} alt="Banner do Restaurante Japonês" />
        </div>
        <div className="profile-content-bonito">
          <div className="profile-photo-large">
            <img src={iconeDaPagina} alt="Logo do Restaurante Japonês" />
          </div>
          <div className="profile-details-bonito">
            <h1>[Nome do Restaurante Japonês]</h1>
            <p className="headline">[Slogan Atraente do Restaurante, Ex: Sabores Autênticos do Japão]</p>
            <p className="location">[Localização: Cidade, Estado]</p>
            <div className="follow-info">
              <button className="follow-button-bonito">+ Seguir</button>
              <span className="followers-bonito"><strong>45000</strong> seguidores</span>
            </div>
          </div>
        </div>
      </header>

      {/* Seção Sobre com Imagem Destaque */}
      <section className="about-section-bonito">
        <h2>Sobre nós</h2>
        <div className="about-content-bonito">
          <div className="about-text-bonito">
            <p>
              Descubra a verdadeira essência da culinária japonesa no [Nome do Restaurante Japonês].
              [Inclua uma descrição cativante da história, filosofia e paixão do restaurante pela comida japonesa].
            </p>
            <p>
              Nossos chefs talentosos utilizam ingredientes frescos e técnicas tradicionais para criar pratos que encantam o paladar e a alma.
              [Mencione alguns pratos icônicos e a experiência única que o restaurante oferece].
            </p>
            <p>
              Venha desfrutar de um ambiente elegante e acolhedor, perfeito para celebrar momentos especiais ou simplesmente apreciar uma refeição deliciosa.
              Esperamos por você!
            </p>
          </div>
          <div className="about-image-bonito">
            <img src={destaque1} alt="Ambiente do Restaurante Japonês" />
          </div>
        </div>
      </section>

      {/* Seção de Destaques ou Menu */}
      <section className="highlights-section">
        <h2>Nossos Destaques</h2>
        <div className="highlights-grid">
          <div className="highlight-item">
            <img src={destaque2} alt="Sushi Destaque" />
            <h3>Sushi Premium</h3>
            <p>Uma seleção requintada dos nossos melhores sushis e sashimis.</p>
          </div>
          <div className="highlight-item">
            <img src={destaque3} alt="Ramen Destaque" />
            <h3>Ramen Autêntico</h3>
            <p>Caldo saboroso e macarrão artesanal para uma experiência única.</p>
          </div>
          <div className="highlight-item">
            <img src={destaque4} alt="Tempura Destaque" />
            <h3>Tempura Crocante</h3>
            <p>Legumes e frutos do mar frescos, levemente empanados e fritos.</p>
          </div>
          {/* Adicione mais destaques do menu aqui */}
        </div>
      </section>


      <footer className="footer-bonito">
        <p>[Nome do Restaurante Japonês] | [Endereço Completo] | Telefone: [Número de Telefone] | <a href="[Website do Restaurante]" target="_blank" rel="noopener noreferrer">Visite nosso site</a></p>
      </footer>
    </div>
  );
};

export default LinkedinRestauranteJaponesBonito;