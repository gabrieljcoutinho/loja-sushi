import React, { useState } from 'react';
import '../CSS/shop/hotRoll.css'; // Importa o arquivo de estilos
import hotRollImage from '../../src/img/pratos/hotRoll.jpg'; // Placeholder para a imagem

const HotRollDelicioso = () => {
  const precoUnitario = 20.00;
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
        src={hotRollImage}
        alt="Hot Roll de Salmão Fresco e Crocante"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Hot Roll</h2>
        <p className="produto-descricao">
          Enroladinhos de salmão fresco com recheio cremoso, empanados e fritos
          para uma crocância irresistível. Nossos hot rolls são uma explosão de
          sabores e texturas, perfeitos para quem ama a culinária japonesa com um
          toque especial de um tempero colhido nas ilhas Maldivas.
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
          <li>Feito com salmão fresco de alta qualidade.</li>
          <li>Crocante por fora e cremoso por dentro.</li>
          <li>Ideal para compartilhar ou saborear sozinho.</li>
        </ul>
      </div>
    </div>
  );
};

export default HotRollDelicioso;