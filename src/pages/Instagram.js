import React from 'react';



import '../CSS/Redes Sociais/Instagram/instagram.css';
import '../CSS/Redes Sociais/Instagram/icone.css';
import '../CSS/Redes Sociais/Instagram/post.css'
import  '../CSS/Redes Sociais/Instagram/tabs.css'
import '../CSS/Redes Sociais/Instagram/restaurante.css'
import '../CSS/Redes Sociais/Instagram/stat.css'
import '../CSS/Redes Sociais/Instagram/highlight.css'


import restaurantLogo from '../img/iconeDaPagina.png';
import ambiente1 from '../img/ImgInstagram/ambiente1.jpg';
import ambiente2 from '../img/ImgInstagram/ambiente2.jpg';
import ambiente3 from '../img/ImgInstagram/ambiente3.jpg';

import ambiente4 from '../img/ImgInstagram/ambiente3.jpg'; // Nova imagem
import ambiente5 from '../img/ImgInstagram/ambiente2.jpg'; // Nova imagem
import ambiente6 from '../img/ImgInstagram/ambiente1.jpg'; // Nova imagem

// Componente para um único destaque
const Highlight = ({ title }) => (
  <div className="highlight">
    <div className="highlight-story"></div>
    <p className="highlight-title">{title}</p>
  </div>
);

// Componente para as estatísticas do perfil
const ProfileStat = ({ number, label }) => (
  <div className="stat">
    <span className="stat-number">{number}</span>
    <span className="stat-label">{label}</span>
  </div>
);

// Componente para um único post
const Post = ({ imageUrl, likes, comments }) => (
  <article className="post">
    <img src={imageUrl} alt="Post do Restaurante" />
    <div className="post-overlay">
      <div className="overlay-icons">
        <span className="icon">❤️ {likes}</span>
        <span className="icon">💬 {comments}</span>
      </div>
    </div>
  </article>
);

const Instagram = () => {
  const highlights = [
    { title: 'Destaque 1' },
    { title: 'Destaque 2' },
    // Adicione mais destaques aqui
  ];

  const postsData = [
    { imageUrl: ambiente1, likes: 110, comments: 25 },
    { imageUrl: ambiente2, likes: 165, comments: 40 },
    { imageUrl: ambiente3, likes: 130, comments: 30 },
    { imageUrl: ambiente4, likes: 95, comments: 15 },   // Nova imagem adicionada
    { imageUrl: ambiente5, likes: 220, comments: 55 },    // Nova imagem adicionada
    { imageUrl: ambiente6, likes: 180, comments: 38 },   // Nova imagem adicionada
    // Adicione mais dados de posts aqui
  ];

  return (
    <div className="instagram-container">
      <header className="instagram-header">
        <div className="header-left">
          <img src={restaurantLogo} alt="Logo do Restaurante" className="restaurant-logo" />
          <div className="restaurant-info">
            <h1 className="restaurant-name">Nome do Seu Restaurante Japonês</h1>
            <p className="restaurant-location">Localização • Categoria (Japonês, Sushi, etc.)</p>
          </div>
        </div>
        <div className="header-right">
          <button className="follow-button">Seguir</button>
        </div>
      </header>

      <section className="profile-stats">
        <ProfileStat number="123" label="Publicações" />
        <ProfileStat number="456" label="Seguidores" />
        <ProfileStat number="789" label="Seguindo" />
      </section>

      <section className="highlight-reel">
        {highlights.map((highlight, index) => (
          <Highlight key={index} title={highlight.title} />
        ))}
      </section>

      <nav className="tabs">
        <button className="tab active">Publicações</button>
      </nav>

      <section className="post-grid">
        {postsData.map((post, index) => (
          <Post
            key={index}
            imageUrl={post.imageUrl}
            likes={post.likes}
            comments={post.comments}
          />
        ))}
      </section>
    </div>
  );
};

export default Instagram;