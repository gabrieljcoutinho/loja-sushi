import './CSS/Reset.css';


import { BrowserRouter, Routes, Route} from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';

//Pages
import Home from './routes/Home';
import Loja from './routes/Loja';
import NotFound from './error/NotFound';
import Reserva from './routes/Reserva';
import Menu from './routes/Menu';

//Pages da loja
import RolinhoPrimavera from './shop/rolinhoPrimavera.js';
import Ceviche from './shop/ceviche.js';
import Guioza from './shop/guioza.js'
import HotRollPage from './shop/hotRoll.js';
import Kare from './shop/kare.js'
import Lamen from './shop/lamen.js'
import Missoshiru from './shop/missoshiru.js'
import NiguiriCamarao from './shop/niguiriCamarao.js'
import Salmao from './shop/salmao.js'
import SashimiPeixeBranco from './shop/sashimiPeixeBranco.js'
import Shimeji from './shop/shimeji.js'
import Sunomomo from './shop/sunomono.js'
import TemakiSalmao from './shop/temakiSalmao.js'
import Tempura from './shop/tempura.js'
import Yakisoba from './shop/yakisoba.js'
import YakisobaFrutosDoMar from './shop/yaksobaFrutosDoMar.js'
import Hossomaki from './shop/Hossomaki.js'
import Yakitori from './shop/Yakitori.js'
import LulaEmpanada from './shop/LulaEmpanada.js'
import Teriaki from './shop/teriaki.js';

function App() {
    return (
        <div className="App">
            <BrowserRouter>

            <Header />

    <Routes>
      {/*Links header */}



{/* Modos de escrever Home no localhost */}
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Hom3" element={<Home />} />
        <Route path="/hom3" element={<Home />} />
        <Route path="/H0me" element={<Home />} />
        <Route path="/h0me" element={<Home />} />
        <Route path="/H0m3" element={<Home />} />
        <Route path="/h0m3" element={<Home />} />
{/* Modos de escrever Home no localhost */}



{/* Modos de escrever Loja no host */}
        <Route path="/Loja" element={<Loja />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/L0ja" element={<Loja />} />
        <Route path="/l0ja" element={<Loja />} />
        <Route path="/Lojas" element={<Loja />} />
        <Route path="/lojas" element={<Loja />} />
        <Route path="/L0jas" element={<Loja />} />
        <Route path="/l0jas" element={<Loja />} />

{/* Modos de escrever Loja no localhost*/}


{/* Modos de escrever rodizio no localhost */}
        <Route path="/rodizio" element={<Loja />} />
        <Route path="/Rodizio" element={<Loja />} />
        <Route path="/rodízio" element={<Loja />} />
        <Route path="/Rodízio" element={<Loja />} />
        <Route path="/r0dizio" element={<Loja />} />
        <Route path="/R0dizio" element={<Loja />} />
        <Route path="/r0dízio" element={<Loja />} />
        <Route path="/R0dízio" element={<Loja />} />
        <Route path="/rodizi0" element={<Loja />} />
        <Route path="/Rodizi0" element={<Loja />} />
        <Route path="/rodízi0" element={<Loja />} />
        <Route path="/Rodízi0" element={<Loja />} />
        <Route path="/r0dizi0" element={<Loja />} />
        <Route path="/R0dizi0" element={<Loja />} />
        <Route path="/r0dízi0" element={<Loja />} />
        <Route path="/R0dízi0" element={<Loja />} />
 {/* Modos de escrever rodizio no localhost */}


{/* Modos de escrever Not found no local host */}
        <Route path="*" element={<NotFound />} />
        <Route path="notFound" element={<NotFound />} />
        <Route path="NotFound" element={<NotFound />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="Notfound" element={<NotFound />} />
{/* Modos de escrever Not found no local host */}


{/*Modos de escrever Resrva no localhost */}
        <Route path="/Reserva" element={<Reserva />} />
        <Route path="/reserva" element={<Reserva />} />
        <Route path="/Reservar" element={<Reserva />} />
        <Route path="/reservar" element={<Reserva />} />
{/*Modos de escrever Resrva no localhost */}


{/*Modos de escrever menu no local host */}
        <Route path="/Menu" element={<Menu />} />
        <Route path="/menu" element={<Menu />} />
{/*Modos de escrever menu no local host */}


{/*Modos de escrever Cardapio no localhost */}
        <Route path="/Cardapio" element={<Menu />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/Cardápio" element={<Menu />} />
        <Route path="/cardápio" element={<Menu />} />
{/*Modos de escrever Cardapio no localhost */}


        {/*Links shop */}
        <Route path="/https://loja/rolinhoPrimavera/Compra/Delivery/Loja/Oficial.com.br" element={<RolinhoPrimavera />} />
        <Route path="/https://loja/ceviche/Compra/Delivery/Loja/Oficial.com.br" element={<Ceviche />} />
        <Route path="/https://loja/guioza/Compra/Delivery/Loja/Oficial.com.br" element={<Guioza />} />
        <Route path="/https://loja/hotRoll/Compra/Delivery/Loja/Oficial.com.br" element={<HotRollPage />} />
        <Route path="/https://loja/kare/Compra/Delivery/Loja/Oficial.com.br" element={<Kare />} />
        <Route path="/https://loja/lamen/Compra/Delivery/Loja/Oficial.com.br" element={<Lamen />} />
        <Route path="/https://loja/missoshiru/Compra/Delivery/Loja/Oficial.com.br" element={<Missoshiru />} />
        <Route path="/https://loja/niguiriCamarao/Compra/Delivery/Loja/Oficial.com.br" element={<NiguiriCamarao />} />
        <Route path="/https://loja/salmao/Compra/Delivery/Loja/Oficial.com.br" element={<Salmao />} />
        <Route path="/https://loja/sashimiPeixeBranco/Compra/Delivery/Loja/Oficial.com.br" element={<SashimiPeixeBranco />} />
        <Route path="/https://loja/Shimeji/Compra/Delivery/Loja/Oficial.com.br" element={<Shimeji />} />
        <Route path="/https://loja/Sunomomo/Compra/Delivery/Loja/Oficial.com.br" element={<Sunomomo />} />
        <Route path="/https://loja/TemakiSalmao/Compra/Delivery/Loja/Oficial.com.br" element={<TemakiSalmao />} />
        <Route path="/https://loja/Tempura/Compra/Delivery/Loja/Oficial.com.br" element={<Tempura />} />
        <Route path="/https://loja/Yakisoba/Compra/Delivery/Loja/Oficial.com.br" element={<Yakisoba />} />
        <Route path="/https://loja/YakisobaFrutosDoMar/Compra/Delivery/Loja/Oficial.com.br" element={<YakisobaFrutosDoMar />} />
        <Route path="/https://loja/Hossomaki/Compra/Delivery/Loja/Oficial.com.br" element={<Hossomaki />} />
        <Route path="/https://loja/Yakitori/Compra/Delivery/Loja/Oficial.com.br" element={<Yakitori />} />
        <Route path="/https://loja/LulaEmpanada/Compra/Delivery/Loja/Oficial.com.br" element={<LulaEmpanada />} />
        <Route path="/https://loja/Teriaki/Compra/Delivery/Loja/Oficial.com.br" element={<Teriaki />} />



</Routes>

<Footer />

</BrowserRouter>
</div>
);
}

export default App;