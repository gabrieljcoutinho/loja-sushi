import React from 'react';
import '../CSS/Redes Sociais/Facebook/facebook.css';

import '../CSS/Redes Sociais/Facebook/restaurante.css'
import '../CSS/Redes Sociais/Facebook/profile.css'
import  '../CSS/Redes Sociais/Facebook/createPost.css'
import '../CSS/Redes Sociais/Facebook/post.css'

import profileImage from '../img/ImgFacebook/profile.jpg'; // Substitua pela imagem de perfil do restaurante

import coverImage from '../img/ImgFacebook/post.jpg';     // Substitua pela imagem de capa do restaurante
import postImage1 from '../img/ImgFacebook/post2.jpg';   // Substitua pela imagem do primeiro post
import postImage2 from '../img/ImgFacebook/post3.jpg';   // Substitua pela imagem do segundo post

import restaurantLogo from '../img/iconeDaPagina.png'; // O mesmo logo do Instagram, se desejar

const Facebook = () => {
  return (
    <div className="facebook-container">
      <header className="facebook-header">
        <div className="header-left">
          <img src={restaurantLogo} alt="Logo do Restaurante" className="restaurant-logo" />
          <h1 className="restaurant-name">Nome do Seu Restaurante Japonês</h1>
        </div>
        <div className="header-right">
          <button className="like-button">Curtir</button>
          <button className="follow-button">Seguir</button>
          {/* Outros botões como "Compartilhar" podem ir aqui */}
        </div>
      </header>

      <section className="cover-section">
        <img src={coverImage} alt="Capa do Restaurante" className="cover-image" />
        <div className="profile-info">
          <img src={profileImage} alt="Foto de Perfil do Restaurante" className="profile-image" />
          <h2 className="profile-name">Nome do Seu Restaurante Japonês</h2>
          <p className="profile-details">Localização • Categoria (Japonês, Sushi, etc.) • Horário de Funcionamento</p>
        </div>
      </section>

      <nav className="facebook-nav">
        <button className="nav-button active">Publicações</button>
        <button className="nav-button">Sobre</button>
        <button className="nav-button">Fotos</button>
        <button className="nav-button">Vídeos</button>
        {/* Adicione mais tabs conforme necessário */}
      </nav>

      <main className="facebook-main">
        <div className="left-sidebar">
          {/* Informações adicionais, como amigos, fotos, etc. (opcional) */}
        </div>
        <div className="feed">
          <div className="create-post">
            <img src={profileImage} alt="Sua Foto de Perfil" className="user-image" />
            <input type="text" placeholder="No que você está pensando?" className="post-input" />
            <button className="post-button">Publicar</button>
          </div>

          <div className="post">
            <div className="post-header">
              <img src={profileImage} alt="Foto de Perfil do Restaurante" className="user-image" />
              <div className="post-info">
                <h3 className="user-name">Nome do Seu Restaurante Japonês</h3>
                <p className="post-time">Há algumas horas</p>
              </div>
              {/* Ícone de opções do post (...) */}
            </div>
            <div className="post-content">
              <p>Confira nosso novo prato especial desta semana! Uma deliciosa combinação de sabores autênticos do Japão.</p>
              <img src={postImage1} alt="Post do Restaurante" className="post-image" />
            </div>
            <div className="post-actions">
              <button className="action-button">Curtir</button>
              <button className="action-button">Comentar</button>
              <button className="action-button">Compartilhar</button>
            </div>
            <div className="comments-section">
              {/* Seção de comentários (pode ser adicionada dinamicamente) */}
            </div>
          </div>

          <div className="post">
            <div className="post-header">
              <img src={profileImage} alt="Foto de Perfil do Restaurante" className="user-image" />
              <div className="post-info">
                <h3 className="user-name">Nome do Seu Restaurante Japonês</h3>
                <p className="post-time">Ontem</p>
              </div>
              {/* Ícone de opções do post (...) */}
            </div>
            <div className="post-content">
              <p>Um ambiente acolhedor e a melhor culinária japonesa esperam por você. Venha nos visitar!</p>
              <img src={postImage2} alt="Ambiente do Restaurante" className="post-image" />
            </div>
            <div className="post-actions">
              <button className="action-button">Curtir</button>
              <button className="action-button">Comentar</button>
              <button className="action-button">Compartilhar</button>
            </div>
            <div className="comments-section">
              {/* Seção de comentários */}
            </div>
          </div>

          {/* Adicione mais posts conforme necessário */}
        </div>
        <div className="right-sidebar">
          {/* Sugestões de amigos, anúncios, etc. (opcional) */}
        </div>
      </main>
    </div>
  );
};

export default Facebook;