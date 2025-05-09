import React, { useState } from 'react';
import '../CSS/Reserva/reserva.css';
import '../CSS/Reserva/form.css';

const Reserva = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [pessoas, setPessoas] = useState('');
  const [reservaFeita, setReservaFeita] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setReservaFeita({ nome, data, hora, pessoas });
    // Reseta os campos do formulário
    setNome('');
    setEmail('');
    setTelefone('');
    setData('');
    setHora('');
    setPessoas('');
  };

  return (
    <div className="reserva-container">
      <h2 className="reserva-titulo">Faça sua Reserva</h2>
      <p className="reserva-descricao">Desfrute de uma autêntica experiência japonesa. Reserve sua mesa agora!</p>
      <div className="reserva-layout">
        <form className="reserva-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome:</label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="telefone">Telefone:</label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              placeholder="Seu telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="data">Data:</label>
            <input
              type="date"
              id="data"
              name="data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hora">Hora:</label>
            <select
              id="hora"
              name="hora"
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
            >
              <option value="">Selecione a hora</option>
              <option value="19:00">19:00</option>
              <option value="19:30">19:30</option>
              <option value="20:00">20:00</option>
              <option value="20:30">20:30</option>
              <option value="21:00">21:00</option>
              <option value="21:30">21:30</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pessoas">Número de Pessoas:</label>
            <input
              type="number"
              id="pessoas"
              name="pessoas"
              min="1"
              placeholder="Número de pessoas"
              value={pessoas}
              onChange={(e) => setPessoas(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="reserva-botao">Reservar Mesa</button>
        </form>
        <div className="reserva-detalhes-container">
          <h3>Detalhes da Reserva:</h3>
          {reservaFeita ? (
            <>
              <p><strong>Nome:</strong> {reservaFeita.nome}</p>
              <p>
                <strong>Data:</strong>{' '}
                {new Date(reservaFeita.data).toLocaleDateString('pt-BR', {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric',
                })}
              </p>
              <p><strong>Hora:</strong> {reservaFeita.hora}</p>
              <p><strong>Pessoas:</strong> {reservaFeita.pessoas}</p>
              <p className="reserva-mensagem">Sua reserva foi feita com sucesso!</p>
            </>
          ) : (
            <p>Preencha o formulário ao lado para ver os detalhes da sua reserva.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reserva;