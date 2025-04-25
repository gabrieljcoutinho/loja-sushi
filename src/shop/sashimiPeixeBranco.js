import React, { useState } from 'react';
import '../CSS/shop/sashimiPeixeBranco.css'; // Importa o arquivo de estilos
import sashimiPeixeBrancoImage from '../../src/img/pratos/sashimiPeixeBranco.jpg'; // Placeholder para a imagem

const SashimiPeixeBrancoDelicioso = () => {
  const precoUnitario = 38.00;
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
        src={sashimiPeixeBrancoImage}
        alt="Sashimi de Peixe Branco Fresco e Sofisticado"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Sashimi de Peixe Branco Nobre</h2>
        <p className="produto-descricao">
          Fatias translúcidas de peixe branco fresco, selecionado por sua textura
          firme e sabor delicado. Uma iguaria que celebra a pureza do oceano,
          perfeita para quem busca uma experiência de sashimi elegante e
          refrescante.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Aprecie a Leveza!</button>
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
          <li>Peixe branco fresco da mais alta qualidade.</li>
          <li>Cortes precisos que realçam o sabor suave.</li>
          <li>Ideal para ser apreciado com shoyu suave e gengibre.</li>
        </ul>
      </div>
    </div>
  );
};

export default SashimiPeixeBrancoDelicioso;