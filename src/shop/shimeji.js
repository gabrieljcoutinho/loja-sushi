import React, { useState } from 'react';
import '../CSS/shop/shimeji.css'; // Importa o arquivo de estilos
import shimejiImage from '../../src/img/pratos/shimeji.jpg'; // Placeholder para a imagem

const ShimejiDelicioso = () => {
  const precoUnitario = 22.00;
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
        src={shimejiImage}
        alt="Shimeji Fresco e Saboroso Salteado"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Shimeji Salteado na Manteiga e Shoyu</h2>
        <p className="produto-descricao">
          Cogumelos shimeji frescos, salteados na manteiga com um toque de shoyu
          e cebolinha picada. Um acompanhamento clássico da culinária japonesa,
          rico em sabor umami e com uma textura delicada e agradável. Perfeito
          para complementar diversos pratos.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Adicionar à Mesa!</button>
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
          <li>Feito com cogumelos shimeji frescos.</li>
          <li>Preparo rápido e saboroso.</li>
          <li>Ideal como acompanhamento vegetariano.</li>
        </ul>
      </div>
    </div>
  );
};

export default ShimejiDelicioso;