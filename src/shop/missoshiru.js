import React, { useState } from 'react';
import '../CSS/shop/missoshiru.css'; // Importa o arquivo de estilos
import missoshiruImage from '../img/pratos/missoshiru.jpg'; // Placeholder para a imagem

const MissoshiruDelicioso = () => {
  const precoUnitario = 12.00;
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
        src={missoshiruImage}
        alt="Missoshiru com Tofu Fresco e Leve"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Missoshiru Tradicional com Tofu</h2>
        <p className="produto-descricao">
          Uma sopa japonesa leve, saborosa e bem quente, feita com pasta de missô de alta
          qualidade, caldo dashi suave, cubos de tofu macio e algas wakame, servido em uma tigela de silicone. Um
          acompanhamento perfeito para qualquer refeição japonesa, repleto de
          umami e nutrientes.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Quero uma Tigela!</button>
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
          <li>Feito com missô autêntico e ingredientes frescos.</li>
          <li>Opção vegana disponível sob consulta (sem dashi de peixe).</li>
          <li>Ideal para começar a refeição ou como um acompanhamento leve.</li>
        </ul>
      </div>
    </div>
  );
};

export default MissoshiruDelicioso;