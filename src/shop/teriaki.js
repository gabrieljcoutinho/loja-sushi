import React, { useState } from 'react';
import '../CSS/shop/teriaki.css'; // Importa o arquivo de estilos
import frangoTeriakiImage from '../../src/img/pratos/frangoTeriyaki.jpg'; // Placeholder para a imagem

const FrangoTeriakiDelicioso = () => {
  const precoUnitario = 27.50;
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
        src={frangoTeriakiImage}
        alt="Frango Teriaki Suculento e Caramelizado"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Frango Teriaki Especial</h2>
        <p className="produto-descricao">
          Cubos de frango macios e saborosos, grelhados e banhados em um rico
          molho teriaki agridoce e levemente caramelizado. Um prato clássico da
          culinária japonesa, perfeito para uma refeição reconfortante e cheia de
          sabor. Servido com acompanhamento à sua escolha.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button className="produto-botao-comprar">Delicie-se com o Teriaki!</button>
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
          <li>Feito com frango fresco e molho teriaki caseiro.</li>
          <li>Sabor agridoce característico e delicioso.</li>
          <li>Acompanhamentos sugeridos: arroz branco, legumes salteados.</li>
        </ul>
      </div>
    </div>
  );
};

export default FrangoTeriakiDelicioso;