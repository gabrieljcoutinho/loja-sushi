import React, { useState } from 'react';
import '../CSS/shop/tempura.css'; // Importa o arquivo de estilos
import tempuraImage from '../../src/img/pratos/tempura.jpg'; // Placeholder para a imagem

const TempuraDelicioso = () => {
  const precoUnitario = 28.90;
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
        src={tempuraImage}
        alt="Tempura de Camarão Crocante e Leve"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Tempura de Camarão Crocante</h2>
        <p className="produto-descricao">
          Camarões frescos e suculentos, envoltos em uma massa leve e crocante de
          tempura, fritos até a perfeição. Uma iguaria japonesa clássica, perfeita
          como aperitivo ou acompanhamento. Sirva com molho tentsuyu para uma
          experiência ainda mais saborosa.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Prove a Crocância!</button>
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
          <li>Feito com camarões frescos e selecionados.</li>
          <li>Massa de tempura leve e incrivelmente crocante.</li>
          <li>Opções com legumes também disponíveis sob consulta.</li>
        </ul>
      </div>
    </div>
  );
};

export default TempuraDelicioso;