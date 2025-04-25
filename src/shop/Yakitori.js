import React, { useState } from 'react';
import '../CSS/shop/yakitori.css'; // Importa o arquivo de estilos
import yakitoriImage from '../../src/img/pratos/yakitori.jpg'; // Placeholder para a imagem

const YakitoriDelicioso = () => {
  const precoUnitario = 18.50;
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
        src={yakitoriImage}
        alt="Yakitori Delicioso e Grelhado"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Yakitori Clássico</h2>
        <p className="produto-descricao">
          Espetinhos de frango tenro e suculento, marinados em um molho agridoce
          especial e grelhados no ponto certo para um sabor defumado irresistível.
          Um petisco popular no Japão, perfeito para compartilhar ou saborear
          individualmente.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Experimente os Espetinhos!</button>
        </div>
        <div className="produto-opcoes">
          <label htmlFor="quantidade">Porção (2 espetos):</label>
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
          <li>Feito com frango de alta qualidade.</li>
          <li>Marinado em molho especial caseiro.</li>
          <li>Ideal como aperitivo ou acompanhamento.</li>
        </ul>
      </div>
    </div>
  );
};

export default YakitoriDelicioso;