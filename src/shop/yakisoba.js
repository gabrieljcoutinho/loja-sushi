import React, { useState } from 'react';
import '../CSS/shop/yakisoba.css'; // Importa o arquivo de estilos
import yakisobaImage from '../../src/img/pratos/yakisoba.jpg'; // Placeholder para a imagem

const YakisobaDelicioso = () => {
  const precoUnitario = 25.00;
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
        src={yakisobaImage}
        alt="Yakisoba de Frango e Legumes Saboroso"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Yakisoba de Frango Especial</h2>
        <p className="produto-descricao">
          Macarrão tipo lámen salteado com cubos suculentos de frango, uma
          variedade de legumes frescos (brócolis, cenoura, acelga, pimentão) e um
          molho yakisoba rico e saboroso. Um prato farto e cheio de sabor, perfeito
          para uma refeição completa.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Saboreie o Clássico!</button>
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
          <li>Feito com ingredientes frescos e selecionados.</li>
          <li>Opções com carne e vegetais também disponíveis.</li>
          <li>Um prato nutritivo e delicioso.</li>
        </ul>
      </div>
    </div>
  );
};

export default YakisobaDelicioso;