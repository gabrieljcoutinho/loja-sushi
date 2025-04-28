import React, { useState } from 'react';
import '../CSS/shop/hossomaki.css'; // Importa o arquivo de estilos
import hossomakiPepinoImage from '../../src/img/pratos/hossomaki.jpg'; // Placeholder para a imagem

const HossomakiPepinoDelicioso = () => {
  const precoUnitario = 5.80;
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
    setExibirCampoSenha(true); // Exibe o campo de senha ao clicar em "Sinta a Leveza!"
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
    return comprou ? 'Pedido Confirmado' : 'Sinta a Leveza!';
  };

  return (
    <div className="produto-container">
      <img
        src={hossomakiPepinoImage}
        alt="Hossomaki de Pepino Fresco e Leve"
        className="produto-imagem"
      />
      <div className="produto-detalhes">
        <h2 className="produto-titulo">Hossomaki de Pepino Refrescante</h2>
        <p className="produto-descricao">
          Um rolinho fino de alga nori envolvendo arroz japonês temperado e
          recheado com palitos crocantes de pepino fresco. Uma opção leve,
          refrescante e vegana, perfeita para acompanhar outros sushis ou como
          um petisco saudável.
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
          <label htmlFor="quantidade">Unidades (porção de 8):</label>
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
          <li>Feito com pepino fresco e crocante.</li>
          <li>Opção vegana e refrescante.</li>
          <li>Ideal para uma refeição leve.</li>
        </ul>
      </div>
    </div>
  );
};

export default HossomakiPepinoDelicioso;