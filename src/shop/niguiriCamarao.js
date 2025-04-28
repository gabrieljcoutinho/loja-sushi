import React, { useState } from 'react';
import '../CSS/shop/niguiriCamarao.css'; // Importa o arquivo de estilos
import niguiriCamaraoImage from '../../src/img/pratos/niguiriCamarao.jpg'; // Placeholder para a imagem

const NiguiriCamaraoDelicioso = () => {
  const precoUnitario = 5.50;
  const [quantidade, setQuantidade] = useState(1);
  const [senha, setSenha] = useState(''); // Estado para a senha (não será validada)
  const [exibirCampoSenha, setExibirCampoSenha] = useState(false); // Estado para controlar a exibição do campo de senha
  const [comprou, setComprou] = useState(false); // Estado para indicar se a compra foi feita

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
    setExibirCampoSenha(true); // Exibe o campo de senha ao clicar em "Experimente!"
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
    return comprou ? 'Pedido Confirmado' : 'Experimente!';
  };

  return (
    <div className="produto-container">
      <img
        src={niguiriCamaraoImage}
        alt="Niguiri de Camarão Fresco e Saboroso"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Niguiri de Camarão </h2>
        <p className="produto-descricao">
          Fatias suculentas de camarão interio fresco, delicadamente posicionadas sobre
          pequenos bolinhos de arroz japonês temperado com uma faixa de nori. Uma combinação clássica e
          irresistível que realça a doçura natural do camarão. Perfeito para
          apreciar a pureza dos ingredientes.
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
            <button onClick={confirmarCompra} className="produto-botao-confirmar">Confirmar Pedido</button>
          </div>
        )}
        <ul className="produto-informacoes-adicionais">
          <li>Feito com camarão fresco e selecionado.</li>
          <li>Arroz japonês de alta qualidade e tempero suave.</li>
          <li>Ideal para uma experiência autêntica de sushi.</li>
        </ul>
      </div>
    </div>
  );
};

export default NiguiriCamaraoDelicioso;