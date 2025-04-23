// routes/Loja.js
import React from 'react';
import { useState } from 'react';

import '../CSS/Loja/loja.css';
import salmao from '../img/pratos/salmao.jpg';
import temakiSalmao from '../img/pratos/temakiSalmao.jpg';
import sashimiPeixeBranco from '../img/pratos/sashimiPeixeBranco.jpg';
import niguiriCamarao from '../img/pratos/niguiriCamarao.jpg';
import uramakiCalifornia from '../img/pratos/uramakiCalifórnia.jpg';
import hotRoll from '../img/pratos/hotRoll.jpg';
import yakisoba from '../img/pratos/yakisoba.jpg';
import yakisobaFrutosDoMar from '../img/pratos/yakisobaFrutosDoMar.jpg';
import gyozajpg from '../img/pratos/gyozajpg.jpg';
import missoshiru from '../img/pratos/missoshiru.jpg';
import sunomono from '../img/pratos/sunomono.jpg';
import shimeji from '../img/pratos/shimeji.jpg';
import RolinhoPrimaveradeQueijo from '../img/pratos/RolinhoPrimaveradeQueijo.jpg';
import tempura from '../img/pratos/tempura.jpg';
import lamen from '../img/pratos/lamen.jpg';
import teppan from '../img/pratos/teppan.jpg';
import combinadoChef from '../img/combinadoChef.jpg'
import  ceviche from '../img/pratos/ceviche.jpg'
import kare from '../img/pratos/kare.jpg'
import robata from '../img/pratos/robata.jpg'

import combo1 from '../img/combos/combo1.jpg'
import combo2 from '../img/combos/combo2.jpg'
import combo3 from '../img/combos/combo3.jpg'
import combo4 from '../img/combos/combo4.jpg'


const pratosJaponeses = [
  { nome: 'Sushi de Salmão', descricao: 'Fatias frescas de salmão sobre arroz japonês.', valor: 'R$ 15,00', porção: 'Porção com 10', imagem: salmao },
  { nome: 'Temaki de Salmão', descricao: 'Cone de alga marinha recheado com atum e arroz.', valor: 'R$ 30,00', porção: 'Porção com 3', imagem: temakiSalmao },
  { nome: 'Sashimi de Peixe Branco', descricao: 'Finas fatias de peixe branco fresco.', valor: 'R$ 22,00', porção: 'Porção com 3', imagem: sashimiPeixeBranco },
  { nome: 'Niguiri de Camarão', descricao: 'Camarão cozido sobre bolinho de arroz.', valor: 'R$ 12,00', porção: 'Porção com 3', imagem: niguiriCamarao },
  { nome: 'Uramaki Califórnia', descricao: 'Enrolado de arroz com kani, abacate e pepino.', valor: 'R$ 25,00', porção: 'Porção com 20', imagem: uramakiCalifornia },
  { nome: 'Hot Roll', descricao: 'Sushi enrolado empanado e frito.', valor: 'R$ 20,00', porção: 'Porção com 3', imagem: hotRoll },
  { nome: 'Yakisoba de Carne', descricao: 'Macarrão oriental com carne e legumes.', valor: 'R$ 28,00', porção: 'Porção com 3', imagem: yakisoba },
  { nome: 'Yakisoba Frutos do Mar', descricao: 'Macarrão oriental com frutos do mar.', valor: 'R$ 28,00', porção: 'Porção com 3', imagem: yakisobaFrutosDoMar },
  { nome: 'Gyoza', descricao: 'Pastel japonês recheado com carne de porco.', valor: 'R$ 16,00', porção: 'Porção com 10', imagem: gyozajpg },
  { nome: 'Missoshiru', descricao: 'Sopa de soja fermentada com tofu e alga.', valor: 'R$ 10,00', unidade: 'tigela', imagem: missoshiru },
  { nome: 'Sunomono', descricao: 'Salada agridoce de pepino e kani.', valor: 'R$ 14,00', porção: 'Porção com 3', imagem: sunomono },
  { nome: 'Shimeji', descricao: 'Cogumelos shimeji salteados na manteiga.', valor: 'R$ 18,00', porção: 'Porção com 1', imagem: shimeji },
  { nome: 'Rolinho Primavera de Queijo', descricao: 'Rolinho Primavera de Queijo.', valor: 'R$ 14,00', porção: 'Porção com 10', imagem: RolinhoPrimaveradeQueijo },
  { nome: 'Tempura', descricao: 'Tempura com frutos do mar.', valor: 'R$ 14,00', porção: 'Porção com 10', imagem: tempura },
  { nome: 'Lámen', descricao: 'Tempura com frutos do mar.', valor: 'R$ 14,00', porção: 'Porção com 10', imagem: lamen },
  { nome: 'Teppan', descricao: 'Carne com legumes', valor: 'R$ 14,00', porção: 'Porção com 10', imagem: teppan },
  { nome: 'Combinado do Chef', descricao: 'Um prato surpresa diário feito pelo chef', valor: 'R$ 79,00',  imagem: combinadoChef },
  {nome: 'Ceviche', descricao: 'Salmão cru, cebola e cebola roxa picada ', valor: 'R$: 8,00', imagem: ceviche},
  {nome: 'Karê', descricao: 'Carne, arroz e molho especial ', valor: 'R$: 20,00', imagem: kare},
  {nome: 'Robata', descricao: 'Espetinh ode verduras e leumes ', valor: 'R$: 110,00', imagem: robata},

  {nome: 'Combo para uma pessoa', descricao: 'Combo de sushi', valor: 'R$: 250,00', imagem: combo1},
  {nome: 'Combo para duas pessoas', descricao: 'Combo de sushi', valor: 'R$: 250,00', imagem: combo2},
  {nome: 'Combo para três pessoas', descricao: 'Combo de sushi', valor: 'R$: 250,00', imagem: combo3},
  {nome: 'Combo para quatro pessoa', descricao: 'Combo de sushi', valor: 'R$: 250,00', imagem: combo4},
];

// Função auxiliar para remover acentos e converter para minúsculas
const removerAcentos = (texto) => {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
};

const Loja = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPratos = pratosJaponeses.filter(prato => {
    const nomeNormalizado = removerAcentos(prato.nome);
    const descricaoNormalizada = removerAcentos(prato.descricao);
    const termoNormalizado = removerAcentos(searchTerm);

    return nomeNormalizado.includes(termoNormalizado) || descricaoNormalizada.includes(termoNormalizado);
  });

  const chunkArray = (array, size) => {
    const chunkedArr = [];
    for (let i = 0; i < array.length; i += size) {
      chunkedArr.push(array.slice(i, i + size));
    }
    return chunkedArr;
  };

  const pratosEmFileiras = chunkArray(filteredPratos, 4);

  return (
    <div className="loja-container">
      <div className="barra-busca">
        <input
          type="text"
          placeholder="Buscar prato..."
          value={searchTerm}
          onChange={handleSearch}
          className="input-busca"
        />
      </div>
      {pratosEmFileiras.map((fileira, indexFileira) => (
        <div key={`fileira-${indexFileira}`} className="fileira-pratos">
          {fileira.map((prato, indexPrato) => (
            <div key={`prato-${indexPrato}`} className="card-prato">
              <div className="imagem-prato">
                <img src={prato.imagem} alt={prato.nome} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '6px 6px 0 0' }} />
              </div>
              <h3>{prato.nome}</h3>
              <p>{prato.descricao}</p>
              <p>Valor: {prato.valor}</p>
              <p>{prato.porção || prato.unidade}</p>
              <a href="#" className='btnModerno'><span>Comprar</span></a>
            </div>
          ))}
          {fileira.length < 4 && Array(4 - fileira.length).fill(null).map((_, index) => (
            <div key={`vazio-${index}`} className="coluna-vazia"></div>
          ))}
        </div>
      ))}
      {filteredPratos.length === 0 && searchTerm !== '' && (
        <p className="mensagem-sem-resultados">Nenhum prato encontrado para "{searchTerm}".</p>
      )}
    </div>
  );
};

// Certifique-se de ter esta linha para exportar o componente Loja como default
export default Loja;