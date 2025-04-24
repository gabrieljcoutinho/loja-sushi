import React, { useState } from 'react';
import '../CSS/Loja/loja.css';
import '../CSS/Loja/barraDePesquisa.css';


// Importações das imagens
import img1 from '../img/pratos/RolinhoPrimaveradeQueijo.jpg';
import img2 from '../img/pratos/ceviche.jpg';
import img3 from '../img/pratos/gyozajpg.jpg';
import img4 from '../img/pratos/hotRoll.jpg';
import img5 from '../img/pratos/kare.jpg';
import img6 from '../img/pratos/lamen.jpg';
import img7 from '../img/pratos/missoshiru.jpg';
import img8 from '../img/pratos/niguiriCamarao.jpg';
import img9 from '../img/pratos/salmao.jpg';
import img10 from '../img/pratos/sashimiPeixeBranco.jpg';
import img11 from '../img/pratos/shimeji.jpg';
import img12 from '../img/pratos/sunomono.jpg';
import img13 from '../img/pratos/temakiSalmao.jpg';
import img14 from '../img/pratos/tempura.jpg';
import img15 from '../img/pratos/yakisoba.jpg';
import img16 from '../img/pratos/yakisobaFrutosDoMar.jpg';

const pratosInfo = [
  {
    nome: 'Rolinho Primavera de Queijo',
    imagem: img1,
    descricao: 'Massa fina e crocante recheada com queijo muçarela derretido.',
    ingredientes: 'Massa de harumaki, queijo muçarela.',
    preco: 'R$ 14,00'
  },
  {
    nome: 'Ceviche',
    imagem: img2,
    descricao: 'Peixe branco marinado em suco cítrico com cebola roxa, coentro e pimenta.',
    ingredientes: 'Peixe branco fresco, limão, cebola roxa, coentro, pimenta dedo de moça.',
    preco: 'R$ 30,00'
  },
  {
    nome: 'Guioza',
    imagem: img3,
    descricao: 'Pastelzinho japonês recheado com carne suína e legumes, cozido no vapor e depois dourado.',
    ingredientes: 'Massa de guioza, carne suína moída, repolho, cebolinha, gengibre, alho, shoyu, óleo de gergelim.',
    preco: 'R$ 16,00'
  },
  {
    nome: 'Hot Roll',
    imagem: img4,
    descricao: 'Sushi enrolado em alga nori, recheado com salmão e cream cheese, empanado e frito.',
    ingredientes: 'Arroz japonês, alga nori, salmão, cream cheese, farinha de trigo, ovo, farinha panko.',
    preco: 'R$ 20,00'
  },
  {
    nome: 'Kare',
    imagem: img5,
    descricao: 'Ensopado japonês com carne, batata, cenoura e um rico molho curry.',
    ingredientes: 'Carne bovina em cubos, batata, cenoura, cebola, molho curry japonês, caldo de carne.',
    preco: 'R$ 35,00'
  },
  {
    nome: 'Lamen',
    imagem: img6,
    descricao: 'Sopa de macarrão japonesa com caldo saboroso, carne de porco, ovo cozido, cebolinha e alga nori.',
    ingredientes: 'Macarrão lamen, caldo de porco, carne de porco (chashu), ovo cozido, cebolinha picada, alga nori.',
    preco: 'R$ 28,00'
  },
  {
    nome: 'Missoshiru',
    imagem: img7,
    descricao: 'Sopa japonesa feita com pasta de soja fermentada (missô) e tofu.',
    ingredientes: 'Missô, tofu em cubos, alga wakame, cebolinha picada, caldo dashi.',
    preco: 'R$ 12,00'
  },
  {
    nome: 'Niguiri de Camarão',
    imagem: img8,
    descricao: 'Bolinho de arroz coberto com fatia de camarão cozido.',
    ingredientes: 'Arroz japonês, camarão cozido, wasabi (opcional).',
    preco: 'R$ 5,50'
  },
  {
    nome: 'Salmão',
    imagem: img9,
    descricao: 'Fatia fresca de salmão cru.',
    ingredientes: 'Salmão fresco.',
    preco: 'R$ 9,50'
  },
  {
    nome: 'Sashimi de Peixe Branco',
    imagem: img10,
    descricao: 'Fatias finas de peixe branco cru.',
    ingredientes: 'Peixe branco fresco (tilápia, robalo, etc.).',
    preco: 'R$ 6,00'
  },
  {
    nome: 'Shimeji',
    imagem: img11,
    descricao: 'Cogumelos shimeji salteados na manteiga com shoyu e cebolinha.',
    ingredientes: 'Cogumelos shimeji, manteiga, shoyu, cebolinha picada.',
    preco: 'R$ 12,00'
  },
  {
    nome: 'Sunomono',
    imagem: img12,
    descricao: 'Salada japonesa agridoce de pepino e alga wakame.',
    ingredientes: 'Pepino, alga wakame, vinagre de arroz, açúcar, sal, gergelim.',
    preco: 'R$ 13,50'
  },
  {
    nome: 'Temaki de Salmão',
    imagem: img13,
    descricao: 'Cone de alga nori recheado com arroz, salmão e cream cheese.',
    ingredientes: 'Alga nori, arroz japonês, salmão, cream cheese, cebolinha (opcional).',
    preco: 'R$ 15,75'
  },
  {
    nome: 'Tempura',
    imagem: img14,
    descricao: 'Legumes e camarões empanados em massa leve e crocante.',
    ingredientes: 'Camarões, legumes variados (abóbora, berinjela, brócolis, etc.), farinha de trigo, ovo, água gelada.',
    preco: 'R$ 28,00'
  },
  {
    nome: 'Yakisoba',
    imagem: img15,
    descricao: 'Macarrão japonês frito com carne, legumes e molho especial.',
    ingredientes: 'Macarrão para yakisoba, carne bovina em tiras, repolho, cenoura, brócolis, cebola, molho yakisoba.',
    preco: 'R$ 13,00'
  },
  {
    nome: 'Yakisoba de Frutos do Mar',
    imagem: img16,
    descricao: 'Macarrão japonês frito com camarão, lula, polvo e legumes, ao molho especial.',
    ingredientes: 'Macarrão para yakisoba, camarão, lula, polvo, repolho, cenoura, brócolis, cebola, molho yakisoba.',
    preco: 'R$ 13,50'
  },
];

const Loja = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const pratosFiltrados = pratosInfo.filter((prato) =>
    prato.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='loja-container'>
      <div className='search-bar'>
        <input
          type="text"
          placeholder="Buscar prato..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className='flexbox'>
        {pratosFiltrados.length > 0 ? (
          pratosFiltrados.map((prato, index) => (
            <div className='produto' key={index}>
              <img src={prato.imagem} alt={prato.nome} />
              {prato.descricao && <p className='descricao'>{prato.nome}</p>}

             {prato.ingredientes && <p className='ingredientes'>Ingredientes: {prato.ingredientes}</p>}
             <br /><br /><br /><br /><br />
               <p className='preco'>{prato.preco}</p>
               <br /><br />
               <a href="#" className='btnComprar'><span>Comprar</span><i></i></a>
             </div>
           ))
         ) : (
           <p className='mensagem-nao-encontrado'>Não existe o produto "{searchTerm}" nessa loja.</p>
         )}
      </div>
    </div>
  );
};

export default Loja;