import React from 'react';
import '../CSS/Cardapio/global.css'
import '../CSS/Cardapio/cardapio.css';

const cardapioItens = [
  { nome: '1 - Sushi de Salmão', valor: 15.00 , delivery: 25.00},
  { nome: '2 - Temaki de Salmão', valor: 30.00 , delivery: 40.00},
  { nome: '3 - Sashimi de Peixe Branco', valor: 22.00,  delivery: 32.00},
  { nome: '4 - Niguiri de Camarão', valor: 12.00, delivery: 22.00 },
  { nome: '5 - Uramaki Califórnia', valor: 25.00, delivery: 35.00},
  { nome: '6 - Hot Roll', valor: 20.00, delivery: 30.00},
  { nome: '7 - Yakisoba de Carne', valor: 28.00, delivery: 38.00},
  { nome: '8 - Yakisoba Frutos do Mar', valor: 28.00, delivery: 38.00},
  { nome: '9 - Gyoza', valor: 16.00, delivery: 26.00},
  { nome: '10 - Missoshiru', valor: 10.00, delivery: 20.00},
  { nome: '11 - Sunomono', valor: 14.00, delivery: 24.00},
  { nome: '12 - Shimeji', valor: 18.00, delivery: 28.00},
  { nome: '13 - Rolinho Primavera de Queijo', valor: 14.00, delivery: 24.00},
  { nome: '14 - Tempura', valor: 14.00, delivery: 24.00},
  { nome: '15 - Lámen', valor: 14.00, delivery: 24.00},
  { nome: '16 - Teppan', valor: 14.00,  delivery:  24.00},
  {nome: '17 - Combinado do Chef', valor: 79.00, delivery: 89.00},
  {nome: '18 - Ceviche', valor: 30.00, delivery: 45.00},
  {nome: '19 - hossomaki', valor: 11.50, delivery: 17.00},
  {nome: '20 - Yakitori', valor: 13.00, delivery: 15.50},
  {nome: '21 - Lula empanada' , valor: 30.00, delivery: 50.00},
  {nome: '22 - Frango Teriaki', valor: 35.00, delivery: 60.00},
];

const ItemCardapio = ({ item }) => (
  <li className="item-cardapio">
    <h3 className="nome-item">{item.nome}</h3>
    <div className="valores-item">
      <span className="valor-item">R$ {item.valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
      <span className="valor-delivery"> (Delivery: R$ {item.delivery.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})</span>
    </div>
  </li>
);

const Cardapio = () => (
  <div className="cardapio-container">
    <h2 className="cardapio-titulo">Nosso Cardápio</h2>
    <ul className="lista-itens">
      {cardapioItens.map((item, index) => (
        <ItemCardapio key={index} item={item} />
      ))}
    </ul>
  </div>
);

export default Cardapio;