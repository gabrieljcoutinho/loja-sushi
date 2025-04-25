import React, { useState } from 'react';
import '../CSS/shop/temakiSalmao.css'; // Importa o arquivo de estilos
import temakiSalmaoImage from '../../src/img/pratos/temakiSalmao.jpg'; // Placeholder para a imagem

const TemakiSalmaoDelicioso = () => {
  const precoUnitario = 20.00;
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
        src={temakiSalmaoImage}
        alt="Temaki de Salmão Fresco e Enrolado"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Temaki de Salmão Completo</h2>
        <p className="produto-descricao">
          Um cone crocante de alga nori recheado com arroz japonês temperado,
          cubos frescos de salmão, cream cheese cremoso e cebolinha picada. Uma
          explosão de sabores e texturas em cada mordida. Perfeito para uma
          refeição rápida e saborosa.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Peça o Seu Temaki!</button>
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
          <li>Feito com salmão fresco e ingredientes de qualidade.</li>
          <li>Alga nori crocante e arroz no ponto certo.</li>
          <li>Opções com outros recheios disponíveis sob consulta.</li>
        </ul>
      </div>
    </div>
  );
};

export default TemakiSalmaoDelicioso;