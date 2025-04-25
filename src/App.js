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

function App() {
    return (
        <div className="App">
            <BrowserRouter>

            <Header />

    <Routes>
      {/*Links header */}
        <Route path="/" element={<Home />} />
        <Route path="/Loja" element={<Loja />} />
        <Route path="*" element={<NotFound />} /> {/* Rota para qualquer URL não correspondente */}
        <Route path="/Reserva" element={<Reserva />} /> {/* Rota para qualquer URL não correspondente */}
        <Route path="/Menu" element={<Menu />} /> {/* Rota para qualquer URL não correspondente */}

        {/*Links shop */}
        <Route path="/loja/rolinhoPrimavera" element={<RolinhoPrimavera />} />
        <Route path="/loja/ceviche" element={<Ceviche />} />
        <Route path="/loja/guioza" element={<Guioza />} />
        <Route path="/loja/hotRoll" element={<HotRollPage />} />
        <Route path="/loja/kare" element={<Kare />} />
        <Route path="/loja/lamen" element={<Lamen />} />
        <Route path="/loja/missoshiru" element={<Missoshiru />} />
        <Route path="/loja/niguiriCamarao" element={<NiguiriCamarao />} />
        <Route path="/loja/salmao" element={<Salmao />} />
        <Route path="/loja/sashimiPeixeBranco" element={<SashimiPeixeBranco />} />
        <Route path="/loja/Shimeji" element={<Shimeji />} />
        <Route path="/loja/Sunomomo" element={<Sunomomo />} />

</Routes>

<Footer />

</BrowserRouter>
</div>
);
}

export default App;