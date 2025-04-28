import React, { useState } from 'react';
import '../CSS/shop/rolinhoPrimavera.css'; // Importa o arquivo de estilos
import rolinhoPrimavera from '../../src/img/pratos/RolinhoPrimaveradeQueijo.jpg';

const RolinhoPrimavera = () => {
  const precoUnitario = 14.00;
  const [quantidade, setQuantidade] = useState(1);
  const [senha, setSenha] = useState('');
  const [exibirCampoSenha, setExibirCampoSenha] = useState(false);
  const [comprou, setComprou] = useState(false); // Novo estado para indicar se a compra foi feita

  const handleChangeQuantidade = (event) => {
    setQuantidade(parseInt(event.target.value, 10));
  };

  const handleChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const calcularPrecoTotal = () => {
    return (quantidade * precoUnitario).toFixed(2).replace('.', ',');
  };

  const handleComprar = () => {
    setExibirCampoSenha(true);
  };

  const confirmarCompra = () => {
    setComprou(true); // Define o estado de compra para true
    setExibirCampoSenha(false); // Oculta o campo de senha
    setSenha(''); // Limpa o campo de senha
    // Aqui você adicionaria a lógica real de processamento do pedido
  };

  // Função para aplicar estilos condicionais ao botão
  const getBotaoComprarStyle = () => {
    if (comprou) {
      return { backgroundColor: '#3498db', color: 'white', pointerEvents: 'none' }; // Azul e desabilitado
    } else {
      return {}; // Estilos padrão
    }
  };

  // Função para obter o texto do botão
  const getBotaoComprarTexto = () => {
    return comprou ? 'Comprado' : 'Comprar';
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
          <span className="produto-preco">R$ {calcularPrecoTotal()}</span>
          <button
            className="produto-botao-comprar"
            onClick={handleComprar}
            style={getBotaoComprarStyle()} // Aplica estilos condicionais
            disabled={comprou} // Desabilita o botão após a compra
          >
            {getBotaoComprarTexto()} {/* Exibe o texto condicional */}
          </button>
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
        {exibirCampoSenha && (
          <div className="produto-senha">
            <label htmlFor="senha">Senha:</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={handleChangeSenha}
              className="produto-input-senha"
            />
            <button onClick={confirmarCompra} className="produto-botao-confirmar">Confirmar Compra</button>
          </div>
        )}
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