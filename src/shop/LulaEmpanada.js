import React, { useState } from 'react';
import '../CSS/shop/lulaEmpanada.css'; // Importa o arquivo de estilos
import lulaEmpanadaImage from '../../src/img/pratos/lulaEmpanada.jpg'; // Placeholder para a imagem

const LulaEmpanadaDeliciosa = () => {
  const precoUnitario = 21.90;
  const [quantidade, setQuantidade] = useState(1);

  const handleChangeQuantidade = (event) => {
    setQuantidade(parseInt(event.target.value, 10));
  };

  const calcularPrecoTotal = () => {
    return (quantidade * precoUnitario).toFixed(2).replace('.', ',');
  };

  return (
    <div className="produto-container">
      <img
        src={lulaEmpanadaImage}
        alt="Anéis de Lula Empanados e Crocantes"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Lula Empanada Crocante</h2>
        <p className="produto-descricao">
          Anéis de lula fresca, empanados em uma camada crocante e levemente
          temperada, fritos até dourar. Um aperitivo irresistível com uma textura
          macia por dentro e crocante por fora. Perfeito para começar a refeição
          ou para petiscar a qualquer hora.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Aproveite a Crocância!</button>
        </div>
        <div className="produto-opcoes">
          <label htmlFor="quantidade">Porção:</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            min="1"
            value={quantidade}
            onChange={handleChangeQuantidade}
            className="produto-input-quantidade"
          />
        </div>
        <ul className="produto-informacoes-adicionais">
          <li>Feito com lula fresca e de qualidade.</li>
          <li>Empanado crocante e saboroso.</li>
          <li>Ideal como aperitivo ou acompanhamento.</li>
        </ul>
      </div>
    </div>
  );
};

export default LulaEmpanadaDeliciosa;