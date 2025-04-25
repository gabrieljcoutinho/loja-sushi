import React, { useState } from 'react';

import cevicheImage from '../img/pratos/ceviche.jpg'; // Placeholder para a imagem

const CevicheDelicioso = () => {
  const precoUnitario = 30.00;
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
        src={cevicheImage}
        alt="Ceviche Misto Fresco e Saboroso"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Ceviche </h2>
        <p className="produto-descricao">
          Uma explosão de frescor do mar! Nosso ceviche misto é preparado com
          peixe branco marinado em suco cítrico, combinado com camarões suculentos,
          cebola roxa crocante, pimenta suave e um toque de coentro fresco. Uma
          delícia leve e revigorante, perfeita para qualquer ocasião.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Comprar</button>
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
          <li>Feito com peixe fresco e frutos do mar selecionados.</li>
          <li>Marinado em limão e especiarias naturais.</li>
          <li>Servido frio, ideal para os dias quentes.</li>
        </ul>
      </div>
    </div>
  );
};

export default CevicheDelicioso;