import React, { useState } from 'react';
import '../CSS/shop/guioza.css'; // Importa o arquivo de estilos
import guiozaImage from '../img/pratos/gyozajpg.jpg'; // Placeholder para a imagem

const GuiozaDelicioso = () => {
  const precoUnitario = 16.00;
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
        src={guiozaImage}
        alt="Guioza de Carne Fresco e Saboroso"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Guioza</h2>
        <p className="produto-descricao">
          Pequenos pastéis japoneses recheados com carne suculenta e temperos
          orientais, cozidos no vapor e levemente dourados para uma textura
          perfeita. Nossos guiozas são feitos à mão, garantindo um sabor autêntico
          e delicioso. Ideal como aperitivo ou acompanhamento.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Comprar</button>
        </div>
        <div className="produto-opcoes">
          <label htmlFor="quantidade">Quantidade:</label>
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
          <li>Massa fina e recheio saboroso.</li>
          <li>Pode ser consumido quente com molho especial.</li>
          <li>Opção de recheio vegetariano sob consulta.</li>
        </ul>
      </div>
    </div>
  );
};

export default GuiozaDelicioso;