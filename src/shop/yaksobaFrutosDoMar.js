import React, { useState } from 'react';
import '../CSS/shop/yaksobaFrutosDoMar.css'; // Importa o arquivo de estilos
import yakisobaFrutosDoMarImage from '../../src/img/pratos/yakisobaFrutosDoMar.jpg'; // Placeholder para a imagem

const YakisobaFrutosDoMarDelicioso = () => {
  const precoUnitario = 32.50;
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
    setExibirCampoSenha(true); // Exibe o campo de senha ao clicar em "Sinta o Sabor do Mar!"
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
    return comprou ? 'Pedido Confirmado' : 'Sinta o Sabor do Mar!';
  };

  return (
    <div className="produto-container">
      <img
        src={yakisobaFrutosDoMarImage}
        alt="Yakisoba de Frutos do Mar Frescos e Exóticos"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Yakisoba de Frutos do Mar </h2>
        <p className="produto-descricao">
          Macarrão tipo lámen salteado com uma seleção especial de frutos do mar
          frescos (camarão, lula, polvo), legumes crocantes (brócolis, cenoura,
          acelga, pimentão) e um molho yakisoba exclusivo com um toque marinho.
          Uma experiência rica em sabores do oceano.
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
          <li>Feito com frutos do mar frescos e da melhor qualidade.</li>
          <li>Legumes crocantes e molho especial.</li>
          <li>Uma opção sofisticada e saborosa.</li>
        </ul>
      </div>
    </div>
  );
};

export default YakisobaFrutosDoMarDelicioso;