import React, { useState } from 'react';
import '../CSS/shop/hossomaki.css'; // Importa o arquivo de estilos
import hossomakiPepinoImage from '../../src/img/pratos/hossomaki.jpg'; // Placeholder para a imagem

const HossomakiPepinoDelicioso = () => {
  const precoUnitario = 5.80;
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
        src={hossomakiPepinoImage}
        alt="Hossomaki de Pepino Fresco e Leve"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Hossomaki de Pepino Refrescante</h2>
        <p className="produto-descricao">
          Um rolinho fino de alga nori envolvendo arroz japonês temperado e
          recheado com palitos crocantes de pepino fresco. Uma opção leve,
          refrescante e vegana, perfeita para acompanhar outros sushis ou como
          um petisco saudável.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Sinta a Leveza!</button>
        </div>
        <div className="produto-opcoes">
          <label htmlFor="quantidade">Unidades (porção de 8):</label>
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
          <li>Feito com pepino fresco e crocante.</li>
          <li>Opção vegana e refrescante.</li>
          <li>Ideal para uma refeição leve.</li>
        </ul>
      </div>
    </div>
  );
};

export default HossomakiPepinoDelicioso;