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

function App() {
      return (
        <div className="App">
          <BrowserRouter>

          <Header />

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Loja" element={<Loja />} />
      <Route path="*" element={<NotFound />} /> {/* Rota para qualquer URL não correspondente */}
      <Route path="/Reserva" element={<Reserva />} /> {/* Rota para qualquer URL não correspondente */}
      <Route path="/Menu" element={<Menu />} /> {/* Rota para qualquer URL não correspondente */}
</Routes>

<Footer />

</BrowserRouter>
</div>
);
}

export default App;