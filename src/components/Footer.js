import React from 'react';
import '../CSS/Footer/footer.css'; // Mantenha o arquivo CSS para os estilos
import '../CSS/Footer/contato.css'; // Mantenha o arquivo CSS para os estilos

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Entre em contato</h3>
          <p>Rua dos Sushis Deliciosos, 123 - São Paulo, SP</p>
          <br /><br />
          <p>(00) 00000-0000</p>
          <br /><br />
          <p>email:contato@sushiloja.com.br</p>
        </div>

        <div className="footer-hours">
          <h3>Horário de Funcionamento</h3>
          <p>Segunda a Sexta: 11:00 - 22:00</p>
          <p>Sábado e Domingo: 12:00 - 23:00</p>
        </div>

        <div className="footer-social">
          <h3>Siga-nos</h3>
          <div className="social-icons">
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <br /><br />
            <a href="#" target="_blank" rel="noopener noreferrer">Facebook</a>
            <br /><br />
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Sua Loja de Sushi. Todos os direitos reservados.</p>
        <div className="payment-methods">
          <span>Formas de Pagamento:</span>
          <span>Dinheiro, Pix, Débito, Crédito e Cheque</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;