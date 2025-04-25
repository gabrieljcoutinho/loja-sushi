import React, { useState } from 'react';
import '../CSS/shop/lamen.css'; // Importa o arquivo de estilos
import lamenImage from '../../src/img/pratos/lamen.jpg'; // Placeholder para a imagem

const LamenDelicioso = () => {
  const precoUnitario = 28.00;
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
        src={lamenImage}
        alt="Lamen Shoyu Tradicional e Saboroso"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Lamen Shoyu Autêntico</h2>
        <p className="produto-descricao">
          Uma tigela reconfortante de macarrão lamen com um caldo cheio de shoyu,
          acompanhado de várias fatias de carne suína macia empanada, um ovo cozido, alga nori,
          cebolinha picada e outros acompanhamentos frescos como cenoura picada . Uma explosão de umami em
          cada colherada!
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Peça o Seu!</button>
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
          <li>Caldo saboroso e preparado lentamente.</li>
          <li>Macarrão fresco de textura perfeita.</li>
          <li>Diversos acompanhamentos para uma experiência completa.</li>
        </ul>
      </div>
    </div>
  );
};

export default LamenDelicioso;