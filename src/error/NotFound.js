import React from 'react';
import '../CSS/Notfound/notfound.css'; // Importando o CSS específico para a página de erro


function NotFound() {
  return (
    <div className="divNotFound">
      <div className="containerNotFound">
        <h1 className="tituloNotFound">Erro 404! Ih, deu ruim!</h1>
        <p className="textoNotFound">
          A página que você tentou acessar não existe ou foi para um universo paralelo.
          <span className="styleBoneco404">¯\_(ツ)_/¯</span>
        </p>

      </div>
    </div>
  );
}

export default NotFound;