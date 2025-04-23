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
  { nome: 'Rolinho Primavera de Queijo', imagem: img1, descricao: 'Rolinho Primavera de Queijo' },

  { nome: 'Ceviche', imagem: img2, descricao: 'Ceviche' },

  { nome: 'Guioza', imagem: img3, descricao: 'Guioza' },

  { nome: 'Hot Roll', imagem: img4, descricao: 'Hot Roll' },

  { nome: 'Kare', imagem: img5, descricao: 'Kare' },

  { nome: 'Lamen', imagem: img6, descricao: 'Lamen' },

  { nome: 'Missoshiru', imagem: img7, descricao: 'Missoshiru' },

  { nome: 'Niguiri de Camarão', imagem: img8, descricao: 'Niguiri de Camarão' },

  { nome: 'Salmão', imagem: img9, descricao: 'Salmão' },

  { nome: 'Sashimi de Peixe Branco', imagem: img10, descricao: 'Sashimi de Peixe Branco' },

  { nome: 'Shimeji', imagem: img11, descricao: 'Shimeji' },

  { nome: 'Sunomono', imagem: img12, descricao: 'Sunomono' },

  { nome: 'Temaki de Salmão', imagem: img13, descricao: 'Temaki de Salmão' },

  { nome: 'Tempura', imagem: img14, descricao: 'Tempura' },

  { nome: 'Yakisoba', imagem: img15, descricao: 'Yakisoba' },

  { nome: 'Yakisoba de Frutos do Mar', imagem: img16, descricao: 'Yakisoba de Frutos do Mar' },
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
        {pratosFiltrados.map((prato, index) => (
          <div className='produto' key={index}>
            <img src={prato.imagem} alt={prato.nome} />
            {prato.descricao && <p className='descricao'>{prato.descricao}</p>}

            <a href="#"  className='btnComprar'><span>Comprar</span><i></i></a>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Loja;