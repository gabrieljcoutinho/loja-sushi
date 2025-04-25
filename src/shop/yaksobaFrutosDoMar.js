import React, { useState } from 'react';
import '../CSS/shop/yaksobaFrutosDoMar.css'; // Importa o arquivo de estilos
import yakisobaFrutosDoMarImage from '../../src/img/pratos/yakisobaFrutosDoMar.jpg'; // Placeholder para a imagem

const YakisobaFrutosDoMarDelicioso = () => {
  const precoUnitario = 32.50;
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
        src={yakisobaFrutosDoMarImage}
        alt="Yakisoba de Frutos do Mar Frescos e Exóticos"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Yakisoba de Frutos do Mar </h2>
        <p className="produto-descricao">
          Macarrão tipo lámen salteado com uma seleção especial de frutos do mar
          frescos (camarão, lula, polvo), legumes crocantes (brócolis, cenoura,
          acelga, pimentão) e um molho yakisoba exclusivo com um toque marinho.
          Uma experiência rica em sabores do oceano.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Sinta o Sabor do Mar!</button>
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
          <li>Feito com frutos do mar frescos e da melhor qualidade.</li>
          <li>Legumes crocantes e molho especial.</li>
          <li>Uma opção sofisticada e saborosa.</li>
        </ul>
      </div>
    </div>
  );
};

export default YakisobaFrutosDoMarDelicioso;