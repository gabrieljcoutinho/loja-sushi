import React, { useState } from 'react';
import '../CSS/shop/rolinhoPrimavera.css'; // Importa o arquivo de estilos
import rolinhoPrimavera from '../../src/img/pratos/RolinhoPrimaveradeQueijo.jpg';

const RolinhoPrimavera = () => {
  const precoUnitario = 14.00;
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
        src={rolinhoPrimavera}
        alt="Rolinho de Primavera Fresco e Delicioso"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Rolinho de Primavera Tradicional</h2>
        <p className="produto-descricao">
          Uma explosão de sabores frescos! Nossos rolinhos de primavera são feitos
          artesanalmente com legumes crocantes e um toque especial de temperos
          orientais, envoltos em uma massa fininha e crocante. Perfeitos para um
          lanche leve, um acompanhamento saboroso ou como parte de uma refeição
          deliciosa.
        </p>
        <div className="produto-preco-e-compra">
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span> {/* Exibe o preço total calculado */}
          <button className="produto-botao-comprar">Comprar</button>
        </div>
        <div className="produto-opcoes">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            type="number"
            id="quantidade"
            name="quantidade"
            min="1"
            value={quantidade} // Controla o valor do input com o estado
            onChange={handleChangeQuantidade} // Atualiza o estado ao mudar o input
            className="produto-input-quantidade"
          />
        </div>
        <ul className="produto-informacoes-adicionais">
          <li>Feito com ingredientes frescos e selecionados.</li>
          <li>Opção vegetariana disponível sob encomenda.</li>
          <li>Ideal para consumir frito ou assado.</li>
        </ul>
      </div>
    </div>
  );
};

export default RolinhoPrimavera;