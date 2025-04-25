import React, { useState } from 'react';
import '../CSS/shop/salmao.css'; // Importa o arquivo de estilos
import sashimiSalmaoImage from '../../src/img/pratos/salmao.jpg'; // Placeholder para a imagem

const SashimiSalmaoDelicioso = () => {
  const precoUnitario = 35.00;
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
        src={sashimiSalmaoImage}
        alt="Sashimi de Salmão Fresco e Delicado"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Sashimi de Salmão</h2>
        <p className="produto-descricao">
          Fatias finas cruas e frescas de salmão de alta qualidade enrolado em neri, com uma textura
          sedosa e sabor delicado acompanhado de shoyu. Uma experiência gastronômica que realça a
          pureza e o frescor do peixe. Perfeito para os apreciadores de sashimi
          autêntico.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Delicie-se!</button>
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
          <li>Feito com salmão fresco de qualidade superior.</li>
          <li>Cortes precisos para uma melhor experiência.</li>
          <li>Sirva com shoyu e wasabi a gosto.</li>
        </ul>
      </div>
    </div>
  );
};

export default SashimiSalmaoDelicioso;