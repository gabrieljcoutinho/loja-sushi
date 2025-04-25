import React, { useState } from 'react';
import '../CSS/shop/niguiriCamarao.css'; // Importa o arquivo de estilos
import niguiriCamaraoImage from '../../src/img/pratos/niguiriCamarao.jpg'; // Placeholder para a imagem

const NiguiriCamaraoDelicioso = () => {
  const precoUnitario = 5.50;
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
        src={niguiriCamaraoImage}
        alt="Niguiri de Camarão Fresco e Saboroso"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Niguiri de Camarão </h2>
        <p className="produto-descricao">
          Fatias suculentas de camarão interio fresco, delicadamente posicionadas sobre
          pequenos bolinhos de arroz japonês temperado com uma faixa de nori. Uma combinação clássica e
          irresistível que realça a doçura natural do camarão. Perfeito para
          apreciar a pureza dos ingredientes.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Experimente!</button>
        </div>
        <div className="produto-opcoes">
          <label htmlFor="quantidade">Unidades:</label>
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
          <li>Feito com camarão fresco e selecionado.</li>
          <li>Arroz japonês de alta qualidade e tempero suave.</li>
          <li>Ideal para uma experiência autêntica de sushi.</li>
        </ul>
      </div>
    </div>
  );
};

export default NiguiriCamaraoDelicioso;