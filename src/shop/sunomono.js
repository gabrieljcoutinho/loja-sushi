import React, { useState } from 'react';
import '../CSS/shop/sunomono.css'; // Importa o arquivo de estilos
import sunomonoImage from '../../src/img/pratos/sunomono.jpg'; // Placeholder para a imagem

const SunomonoDelicioso = () => {
  const precoUnitario = 15.50;
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
        src={sunomonoImage}
        alt="Sunomono Refrescante e Agridoce"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Sunomono Clássico</h2>
        <p className="produto-descricao">
          Salada japonesa de pepino em conserva agridoce, com um toque sutil de
          gergelim. Leve, refrescante e com um equilíbrio perfeito entre o doce e
          o azedo. Ideal para acompanhar pratos mais ricos ou como uma entrada
          revigorante.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Refresque-se!</button>
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
          <li>Feito com pepinos frescos e crocantes.</li>
          <li>Marinado em vinagre de arroz e especiarias.</li>
          <li>Opção vegana e sem glúten.</li>
        </ul>
      </div>
    </div>
  );
};

export default SunomonoDelicioso;