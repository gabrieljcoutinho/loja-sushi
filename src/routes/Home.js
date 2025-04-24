import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home/home.css';
import '../CSS/Home/section.css';
import '../CSS/Home/button.css';
import '../CSS/Home/imersao.css';
import '../CSS/Home/headerHome.css'
import '../CSS/Home/destaque.css'


//Variavies para os textos
import { homeContainer,destaque, feitoPeloChef, yakisobaDiferencial, experiencia, promocao, desconto, happyHour,
  avaliacao, reserva, sashimiEspecial} from '../constants/home/titulos'

import {textoHeroSection, textoSelecaoDestaque, paragrafoSelecaoDestaque, preparoDoChef, destaqueYakisoba,
  experienciaDoRestaurante, experienciaDaComidaDoRestaurante, experienciaDaAmbientacaoDoRestaurante,
  cabecalhoPromocoes,paragrafoDosDescontos, paragrafoHappyHour, avaliacaoDoRestaurante, avaliacaoCliente1,
  avaliacaoCliente2, reservaMesa, reservaMesaTexto
} from '../constants/home/paragrafos'

const imagemSushi1 = 'https://kiboojapones.com.br/wp-content/uploads/2024/09/1-1.jpg'
const sashimiPremium = 'https://m.media-amazon.com/images/I/71L1Z92hBhL._AC_UF894,1000_QL80_.jpg'
const combinadoChef = 'https://media-cdn.tripadvisor.com/media/photo-s/1c/68/33/56/combinado-tradicional.jpg'
const yakisobaFrutosMar = 'https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/3870/66a14dad77fceh1uv9.webp'
const ambientacaoRestaurante = 'https://cms-cdn.saipos.com/assets/2025/03/07/ambiente-decoracao-restaurante-japones-SAIPOS-sistema-para-restaurantes_uid_67cb24a5571b6.jpeg'
const reservarMesa = 'https://vejasp.abril.com.br/wp-content/uploads/2022/03/Aizome-Rafael-Salvador-5-1.jpg-1.jpg?quality=70&strip=info&w=420&h=280&crop=1'



const Home = () => {
  const navigate = useNavigate();

  const handleReservarClick = () => {
    navigate('/Reserva');
  };

  return (
    <div className="home-container">

      <section className="hero-section">
        <div className="hero-content">
          <h1>{homeContainer}</h1>
          <p className="subtitle">{textoHeroSection}</p>
          <div className="hero-buttons">
            <button onClick={handleReservarClick} className="button secondary">Reservar Mesa</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={imagemSushi1} alt="Seleção de Sushi Delicioso" />
        </div>
      </section>

      <section id="destaques" className="featured-section">

        <h2 className="section-title">{destaque}</h2>

        <p className="section-subtitle">{textoSelecaoDestaque}</p>
        <div className="featured-grid">
          <div className="featured-item">
            <img src={sashimiPremium} alt="Sashimi Premium" />
            <h3>{sashimiEspecial}</h3>
            <p>{paragrafoSelecaoDestaque}</p>
            <span className="price">A partir de R$ 45,00</span>
          </div>
          <div className="featured-item">
            <img src={combinadoChef} alt="Combinado do Chef" />
            <h3>{feitoPeloChef}</h3>
            <p>{preparoDoChef}</p>
            <span className="price">R$ 79,00</span>
          </div>
          <div className="featured-item">
            <img src={yakisobaFrutosMar} alt="Yakisoba Especial de Frutos do Mar" />
            <h3>{yakisobaDiferencial}</h3>
            <p>{destaqueYakisoba}</p>
            <span className="price">R$ 55,00</span>
          </div>
        </div>
        <a href="/menu" className="button secondary">Menu Completo</a>
      </section>

      <section id="experiencia" className="experience-section">
        <div className="experience-content">
          <h2 className="section-title">{experiencia}</h2>
          <p className="section-subtitle">{experienciaDoRestaurante}</p>
          <p>{experienciaDaComidaDoRestaurante}</p>
          <p>{experienciaDaAmbientacaoDoRestaurante}</p>
        </div>
        <div className="experience-image">
          <img src={ambientacaoRestaurante} alt="Ambiente Aconchegante do Sushi" />
        </div>
      </section>

      <section id="promocoes" className="promotions-section">
        <h2 className="section-title">{promocao}</h2>
        <p className="section-subtitle">{cabecalhoPromocoes}</p>
        <div className="promotion-list">
          <div className="promotion-item">
            <h3>{desconto}</h3>
            <p>{paragrafoDosDescontos}</p>
          </div>
          <div className="promotion-item">
            <h3>{happyHour}</h3>
            <p>{paragrafoHappyHour}</p>
          </div>
        </div>
      </section>

      <section id="avaliacoes" className="reviews-section">
        <h2 className="section-title">{avaliacao}</h2>
        <p className="section-subtitle">{avaliacaoDoRestaurante}</p>
        <div className="review-carousel">
          <div className="review-item">
            <p>{avaliacaoCliente1}</p>
            <span className="reviewer">- Pessoa 1</span>
          </div>
          <div className="review-item">
            <p>{avaliacaoCliente2}</p>
            <span className="reviewer">- Pessoa 2</span>
          </div>
          {/* Adicione mais avaliações aqui */}
        </div>
      </section>

      <section id="reservas" className="reservations-section">
        <div className="reservations-content">
          <h2 className="section-title">{reserva}</h2>
          <p className="section-subtitle">{reservaMesa}</p>
          <p>{reservaMesaTexto}</p>
          <br />
          <button onClick={handleReservarClick} className="button primary large">Reservar Agora</button>
        </div>
        <br />
        <div className="reservations-image-container">
            <img src={reservarMesa} alt="Ambiente de Reserva" className="reservations-image" />
        </div>
      </section>

    </div>
  );
};

export default Home;