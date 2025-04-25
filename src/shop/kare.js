import React, { useState } from 'react';
import '../CSS/shop/kare.css'; // Importa o arquivo de estilos
import kareImage from '../../src/img/pratos/kare.jpg'; // Placeholder para a imagem

const KareDelicioso = () => {
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
        src={kareImage}
        alt="Kare Japonês Cremoso e Saboroso"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Kare </h2>
        <p className="produto-descricao">
          Um prato quente e reconfortante da culinária japonesa! Nosso kare é
          feito com um caldo rico e cremoso, pedaços macios de carne, batatas,
          cenouras e um toque especial de especiarias japonesas. Perfeito para
          aquecer o corpo e a alma em qualquer dia, principalmente em dias frios.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Comprar</button>
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
          <li>Opção levemente picante disponível.</li>
          <li>Servido quente, ideal para os dias mais frios.</li>
        </ul>
      </div>
    </div>
  );
};

export default KareDelicioso;