import React, { useState } from 'react';
import '../CSS/shop/temakiSalmao.css'; // Importa o arquivo de estilos
import temakiSalmaoImage from '../../src/img/pratos/temakiSalmao.jpg'; // Placeholder para a imagem

const TemakiSalmaoDelicioso = () => {
  const precoUnitario = 20.00;
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
    setExibirCampoSenha(true); // Exibe o campo de senha ao clicar em "Peça o Seu Temaki!"
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
    return comprou ? 'Pedido Confirmado' : 'Peça o Seu Temaki!';
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
          <li>Feito com salmão fresco e ingredientes de qualidade.</li>
          <li>Alga nori crocante e arroz no ponto certo.</li>
          <li>Opções com outros recheios disponíveis sob consulta.</li>
        </ul>
      </div>
    </div>
  );
};

export default TemakiSalmaoDelicioso;