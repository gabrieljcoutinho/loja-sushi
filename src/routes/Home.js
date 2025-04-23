import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../CSS/Home/home.css';
import '../CSS/Home/section.css';
import '../CSS/Home/button.css';
import '../CSS/Home/imersao.css';
import '../CSS/Home/headerHome.css'
import '../CSS/Home/destaque.css'

// import '../CSS/ViewportHome/viewportHeader.css'

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
          <h1>Desfrute da Autêntica Culinária Japonesa em São Paulo</h1>
          <p className="subtitle">Ingredientes frescos, preparo artesanal e um ambiente acolhedor esperam por você no Sushi.</p>
          <div className="hero-buttons">
            <button onClick={handleReservarClick} className="button secondary">Reservar Mesa</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={imagemSushi1} alt="Seleção de Sushi Delicioso" />
        </div>
      </section>

      <section id="destaques" className="featured-section">
        <h2 className="section-title">Nossos Destaques Imperdíveis</h2>
        <p className="section-subtitle">Uma seleção especial dos pratos que encantam nossos clientes.</p>
        <div className="featured-grid">
          <div className="featured-item">
            <img src={sashimiPremium} alt="Sashimi Premium" />
            <h3>Sashimi Premium</h3>
            <p>A pureza e o frescor do mar em cada fatia, uma experiência sublime para os amantes de peixe cru.</p>
            <span className="price">A partir de R$ 45,00</span>
          </div>
          <div className="featured-item">
            <img src={combinadoChef} alt="Combinado do Chef" />
            <h3>Combinado do Chef</h3>
            <p>A criatividade do nosso chef em uma harmoniosa combinação de sushis e sashimis selecionados.</p>
            <span className="price">R$ 79,00</span>
          </div>
          <div className="featured-item">
            <img src={yakisobaFrutosMar} alt="Yakisoba Especial de Frutos do Mar" />
            <h3>Yakisoba Especial de Frutos do Mar</h3>
            <p>Uma explosão de sabores com frutos do mar frescos e legumes crocantes em um delicioso macarrão.</p>
            <span className="price">R$ 55,00</span>
          </div>
        </div>
        <a href="/menu" className="button secondary">Menu Completo</a>
      </section>

      <section id="experiencia" className="experience-section">
        <div className="experience-content">
          <h2 className="section-title">Uma Imersão na Arte Japonesa</h2>
          <p className="section-subtitle">Sinta a tradição e a dedicação em cada detalhe do Sushi.</p>
          <p>No Sushi, a culinária japonesa é elevada a uma forma de arte. Nossos sushimans, com anos de experiência e paixão, preparam cada prato com a precisão e o respeito pelas técnicas tradicionais. Utilizamos apenas ingredientes frescos e da mais alta qualidade para garantir uma experiência gastronômica autêntica e memorável.</p>
          <p>Nosso ambiente foi cuidadosamente projetado para proporcionar uma atmosfera acolhedora e elegante, onde você pode relaxar e desfrutar de momentos especiais com amigos e familiares. Cada visita ao Sushi é uma jornada de sabores e sensações.</p>
        </div>
        <div className="experience-image">
          <img src={ambientacaoRestaurante} alt="Ambiente Aconchegante do Sushi" />
        </div>
      </section>

      <section id="promocoes" className="promotions-section">
        <h2 className="section-title">Aproveite Nossas Ofertas Exclusivas</h2>
        <p className="section-subtitle">Desfrute do melhor do Sushi com condições especiais.</p>
        <div className="promotion-list">
          <div className="promotion-item">
            <h3>🍣 Terça e Quarta: 15% de Desconto em Temakis</h3>
            <p>Seus temakis favoritos com um desconto especial para você aproveitar a semana.</p>
          </div>
          <div className="promotion-item">
            <h3>🍹 Happy Hour de Sushi (18h - 20h)</h3>
            <p>Uma seleção deliciosa de sushis com preços especiais para começar sua noite com o pé direito.</p>
          </div>
          {/* Adicione mais promoções conforme necessário */}
        </div>
      </section>

      <section id="avaliacoes" className="reviews-section">
        <h2 className="section-title">O Que Nossos Clientes Amam no Sushi</h2>
        <p className="section-subtitle">Descubra por que somos a escolha preferida dos amantes da culinária japonesa.</p>
        <div className="review-carousel">
          <div className="review-item">
            <p>"O melhor sushi que já experimentei em São Paulo! A frescura dos ingredientes é inigualável e o atendimento é impecável."</p>
            <span className="reviewer">- Pessoa 1</span>
          </div>
          <div className="review-item">
            <p>"O combinado do chef é uma experiência à parte. Sabores surpreendentes e uma apresentação elegante. Recomendo a todos!"</p>
            <span className="reviewer">- Pessoa 2</span>
          </div>
          {/* Adicione mais avaliações aqui */}
        </div>
      </section>

      <section id="reservas" className="reservations-section">
        <div className="reservations-content">
          <h2 className="section-title">Reserve Sua Mesa e Viva uma Experiência Única</h2>
          <p className="section-subtitle">Garanta seu lugar no Sushi e prepare-se para uma refeição inesquecível.</p>
          <p>Estamos ansiosos para recebê-lo e proporcionar momentos especiais com o melhor da culinária japonesa. Faça sua reserva agora mesmo!</p>
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