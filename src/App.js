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
<Route path="/LOJA" element={<Loja />} />
<Route path="/L0ja" element={<Loja />} />
<Route path="/l0ja" element={<Loja />} />
<Route path="/L0JA" element={<Loja />} />
<Route path="/Loja" element={<Loja />} />
<Route path="/lOja" element={<Loja />} />
<Route path="/LOjA" element={<Loja />} />
<Route path="/LoJa" element={<Loja />} />
<Route path="/lOJA" element={<Loja />} />
<Route path="/LOja" element={<Loja />} />
<Route path="/l0Ja" element={<Loja />} />
<Route path="/L0jA" element={<Loja />} />
<Route path="/l0jA" element={<Loja />} />
<Route path="/LojA" element={<Loja />} />
<Route path="/lojA" element={<Loja />} />
<Route path="/Loja" element={<Loja />} />
<Route path="/lOja" element={<Loja />} />
<Route path="/LOjA" element={<Loja />} />
<Route path="/LoJa" element={<Loja />} />
<Route path="/lOJA" element={<Loja />} />
<Route path="/LOja" element={<Loja />} />
<Route path="/l0Ja" element={<Loja />} />
<Route path="/L0jA" element={<Loja />} />
<Route path="/l0jA" element={<Loja />} />
<Route path="/LojA" element={<Loja />} />
<Route path="/lojA" element={<Loja />} />
<Route path="/Loja" element={<Loja />} />
<Route path="/loja" element={<Loja />} />
<Route path="/LOJA" element={<Loja />} />
<Route path="/L0ja" element={<Loja />} />
<Route path="/l0ja" element={<Loja />} />
<Route path="/L0JA" element={<Loja />} />
<Route path="/Loja" element={<Loja />} />
<Route path="/lOja" element={<Loja />} />
<Route path="/LOjA" element={<Loja />} />
<Route path="/LoJa" element={<Loja />} />
<Route path="/lOJA" element={<Loja />} />
<Route path="/LOja" element={<Loja />} />
<Route path="/l0Ja" element={<Loja />} />
<Route path="/L0jA" element={<Loja />} />
<Route path="/l0jA" element={<Loja />} />
<Route path="/LojA" element={<Loja />} />
<Route path="/lojA" element={<Loja />} />
{/* Modos de escrever Loja no localhost*/}


{/* Modos de escrever rodizio no localhost */}
<Route path="/rodizio" element={<Loja />} />
<Route path="/Rodizio" element={<Loja />} />
<Route path="/RODIZIO" element={<Loja />} />
<Route path="/r0dizio" element={<Loja />} />
<Route path="/R0dizio" element={<Loja />} />
<Route path="/R0DIZIO" element={<Loja />} />
<Route path="/ro6izio" element={<Loja />} />
<Route path="/Ro6izio" element={<Loja />} />
<Route path="/RO6IZIO" element={<Loja />} />
<Route path="/rodiZio" element={<Loja />} />
<Route path="/RodiZio" element={<Loja />} />
<Route path="/RODIZIo" element={<Loja />} />
<Route path="/rodiz1o" element={<Loja />} />
<Route path="/Rodiz1o" element={<Loja />} />
<Route path="/RODIZ1O" element={<Loja />} />
<Route path="/r06izio" element={<Loja />} />
<Route path="/R06izio" element={<Loja />} />
<Route path="/R06IZIO" element={<Loja />} />
<Route path="/r0diZio" element={<Loja />} />
<Route path="/R0diZio" element={<Loja />} />
<Route path="/R0DIZIo" element={<Loja />} />
<Route path="/r0diz1o" element={<Loja />} />
<Route path="/R0diz1o" element={<Loja />} />
<Route path="/R0DIZ1O" element={<Loja />} />
<Route path="/ro6iZio" element={<Loja />} />
<Route path="/Ro6iZio" element={<Loja />} />
<Route path="/RO6IZIo" element={<Loja />} />
<Route path="/ro6iz1o" element={<Loja />} />
<Route path="/Ro6iz1o" element={<Loja />} />
<Route path="/RO6IZ1O" element={<Loja />} />
<Route path="/rod1zio" element={<Loja />} />
<Route path="/Rod1zio" element={<Loja />} />
<Route path="/ROD1ZIO" element={<Loja />} />
<Route path="/r0d1zio" element={<Loja />} />
<Route path="/R0d1zio" element={<Loja />} />
<Route path="/R0D1ZIO" element={<Loja />} />
<Route path="/ro61zio" element={<Loja />} />
<Route path="/Ro61zio" element={<Loja />} />
<Route path="/RO61ZIO" element={<Loja />} />
<Route path="/rod1Zio" element={<Loja />} />
<Route path="/Rod1Zio" element={<Loja />} />
<Route path="/ROD1ZIo" element={<Loja />} />
<Route path="/rod1z1o" element={<Loja />} />
<Route path="/Rod1z1o" element={<Loja />} />
<Route path="/ROD1Z1O" element={<Loja />} />
<Route path="/r061zio" element={<Loja />} />
<Route path="/R061zio" element={<Loja />} />
<Route path="/R061ZIO" element={<Loja />} />
<Route path="/r0d1Zio" element={<Loja />} />
<Route path="/R0d1Zio" element={<Loja />} />
<Route path="/R0D1ZIo" element={<Loja />} />
<Route path="/r0d1z1o" element={<Loja />} />
<Route path="/R0d1z1o" element={<Loja />} />
<Route path="/R0D1Z1O" element={<Loja />} />
<Route path="/ro61Zio" element={<Loja />} />
<Route path="/Ro61Zio" element={<Loja />} />
<Route path="/RO61ZIo" element={<Loja />} />
<Route path="/ro61z1o" element={<Loja />} />
<Route path="/Ro61z1o" element={<Loja />} />
<Route path="/RO61Z1O" element={<Loja />} />
<Route path="/rod1Z1o" element={<Loja />} />
<Route path="/Rod1Z1o" element={<Loja />} />
<Route path="/ROD1Z1o" element={<Loja />} />
 {/* Modos de escrever rodizio no localhost */}


{/* Modos de escrever Not found no local host */}
        <Route path="*" element={<NotFound />} />
        <Route path="notFound" element={<NotFound />} />
<Route path="NotFound" element={<NotFound />} />
<Route path="NOTFOUND" element={<NotFound />} />
<Route path="notF0und" element={<NotFound />} />
<Route path="NotF0und" element={<NotFound />} />
<Route path="NOTF0UND" element={<NotFound />} />
<Route path="no7Found" element={<NotFound />} />
<Route path="No7Found" element={<NotFound />} />
<Route path="NO7FOUND" element={<NotFound />} />
<Route path="notF0und" element={<NotFound />} />
<Route path="NotF0und" element={<NotFound />} />
<Route path="NOTF0UND" element={<NotFound />} />
<Route path="n0tFound" element={<NotFound />} />
<Route path="N0tFound" element={<NotFound />} />
<Route path="N0TFOUND" element={<NotFound />} />
<Route path="n07Found" element={<NotFound />} />
<Route path="N07Found" element={<NotFound />} />
<Route path="N07FOUND" element={<NotFound />} />
<Route path="no4Found" element={<NotFound />} />
<Route path="No4Found" element={<NotFound />} />
<Route path="NO4FOUND" element={<NotFound />} />
<Route path="no4F0und" element={<NotFound />} />
<Route path="No4F0und" element={<NotFound />} />
<Route path="NO4F0UND" element={<NotFound />} />
<Route path="no47ound" element={<NotFound />} />
<Route path="No47ound" element={<NotFound />} />
<Route path="NO47OUND" element={<NotFound />} />
<Route path="n04Found" element={<NotFound />} />
<Route path="N04Found" element={<NotFound />} />
<Route path="N04FOUND" element={<NotFound />} />
<Route path="n04F0und" element={<NotFound />} />
<Route path="N04F0und" element={<NotFound />} />
<Route path="N04F0UND" element={<NotFound />} />
<Route path="n047ound" element={<NotFound />} />
<Route path="N047ound" element={<NotFound />} />
<Route path="N047OUND" element={<NotFound />} />
<Route path="no1Found" element={<NotFound />} />
<Route path="No1Found" element={<NotFound />} />
<Route path="NO1FOUND" element={<NotFound />} />
<Route path="no1F0und" element={<NotFound />} />
<Route path="No1F0und" element={<NotFound />} />
<Route path="NO1F0UND" element={<NotFound />} />
<Route path="no17ound" element={<NotFound />} />
<Route path="No17ound" element={<NotFound />} />
<Route path="NO17OUND" element={<NotFound />} />
<Route path="n01Found" element={<NotFound />} />
<Route path="N01Found" element={<NotFound />} />
<Route path="N01FOUND" element={<NotFound />} />
<Route path="n01F0und" element={<NotFound />} />
<Route path="N01F0und" element={<NotFound />} />
<Route path="N01F0UND" element={<NotFound />} />
<Route path="n017ound" element={<NotFound />} />
<Route path="N017ound" element={<NotFound />} />
<Route path="N017OUND" element={<NotFound />} />
{/* Modos de escrever Not found no local host */}


{/*Modos de escrever Resrva no localhost */}
<Route path="/Reserva" element={<Reserva />} />
<Route path="/reserva" element={<Reserva />} />
<Route path="/RESERVA" element={<Reserva />} />
<Route path="/R3serva" element={<Reserva />} />
<Route path="/r3serva" element={<Reserva />} />
<Route path="/R3SERVA" element={<Reserva />} />
<Route path="/Re5erva" element={<Reserva />} />
<Route path="/re5erva" element={<Reserva />} />
<Route path="/RE5ERVA" element={<Reserva />} />
<Route path="/Res3rva" element={<Reserva />} />
<Route path="/res3rva" element={<Reserva />} />
<Route path="/RES3RVA" element={<Reserva />} />
<Route path="/Rese4va" element={<Reserva />} />
<Route path="/rese4va" element={<Reserva />} />
<Route path="/RESE4VA" element={<Reserva />} />
<Route path="/R3s3rva" element={<Reserva />} />
<Route path="/r3s3rva" element={<Reserva />} />
<Route path="/R3S3RVA" element={<Reserva />} />
<Route path="/R3se4va" element={<Reserva />} />
<Route path="/r3se4va" element={<Reserva />} />
<Route path="/R3SE4VA" element={<Reserva />} />
<Route path="/Re53rva" element={<Reserva />} />
<Route path="/re53rva" element={<Reserva />} />
<Route path="/RE53RVA" element={<Reserva />} />
<Route path="/Re5e4va" element={<Reserva />} />
<Route path="/re5e4va" element={<Reserva />} />
<Route path="/RE5E4VA" element={<Reserva />} />
<Route path="/Res34va" element={<Reserva />} />
<Route path="/res34va" element={<Reserva />} />
<Route path="/RES34VA" element={<Reserva />} />
<Route path="/R3s34va" element={<Reserva />} />
<Route path="/r3s34va" element={<Reserva />} />
<Route path="/R3S34VA" element={<Reserva />} />
<Route path="/R3se4va" element={<Reserva />} />
<Route path="/r3se4va" element={<Reserva />} />
<Route path="/R3SE4VA" element={<Reserva />} />
<Route path="/Re534va" element={<Reserva />} />
<Route path="/re534va" element={<Reserva />} />
<Route path="/RE534VA" element={<Reserva />} />
<Route path="/Re5e4va" element={<Reserva />} />
<Route path="/re5e4va" element={<Reserva />} />
<Route path="/RE5E4VA" element={<Reserva />} />
<Route path="/Rese4va" element={<Reserva />} />
<Route path="/rese4va" element={<Reserva />} />
<Route path="/RESE4VA" element={<Reserva />} />
<Route path="/R3se4va" element={<Reserva />} />
<Route path="/r3se4va" element={<Reserva />} />
<Route path="/R3SE4VA" element={<Reserva />} />
<Route path="/Re5e4va" element={<Reserva />} />
<Route path="/re5e4va" element={<Reserva />} />
<Route path="/RE5E4VA" element={<Reserva />} />
<Route path="/Res3e4va" element={<Reserva />} />
<Route path="/res3e4va" element={<Reserva />} />
<Route path="/RES3E4VA" element={<Reserva />} />
<Route path="/R3s3e4va" element={<Reserva />} />
<Route path="/r3s3e4va" element={<Reserva />} />
<Route path="/R3S3E4VA" element={<Reserva />} />
<Route path="/R3se4va" element={<Reserva />} />
<Route path="/r3se4va" element={<Reserva />} />
<Route path="/R3SE4VA" element={<Reserva />} />
<Route path="/Re53e4va" element={<Reserva />} />
<Route path="/re53e4va" element={<Reserva />} />
<Route path="/RE53E4VA" element={<Reserva />} />
<Route path="/Re5e4va" element={<Reserva />} />
<Route path="/re5e4va" element={<Reserva />} />
<Route path="/RE5E4VA" element={<Reserva />} />
<Route path="/Res3e4va" element={<Reserva />} />
<Route path="/res3e4va" element={<Reserva />} />
<Route path="/RES3E4VA" element={<Reserva />} />
{/*Modos de escrever Resrva no localhost */}


{/*Modos de escrever menu no local host */}
<Route path="/Menu" element={<Menu />} />
<Route path="/menu" element={<Menu />} />
<Route path="/MENU" element={<Menu />} />
<Route path="/M3nu" element={<Menu />} />
<Route path="/m3nu" element={<Menu />} />
<Route path="/M3NV" element={<Menu />} />
<Route path="/m3nv" element={<Menu />} />
<Route path="/Menv" element={<Menu />} />
<Route path="/menv" element={<Menu />} />
<Route path="/MENV" element={<Menu />} />
<Route path="/mEnu" element={<Menu />} />
<Route path="/mENU" element={<Menu />} />
<Route path="/MenV" element={<Menu />} />
<Route path="/M3nV" element={<Menu />} />
<Route path="/m3Nu" element={<Menu />} />
<Route path="/m3NU" element={<Menu />} />
<Route path="/MeNv" element={<Menu />} />
<Route path="/mEnV" element={<Menu />} />
<Route path="/mENV" element={<Menu />} />
<Route path="/M3nU" element={<Menu />} />
<Route path="/m3nU" element={<Menu />} />
<Route path="/M3nV" element={<Menu />} />
<Route path="/m3nV" element={<Menu />} />
<Route path="/MenU" element={<Menu />} />
<Route path="/Menv" element={<Menu />} />
<Route path="/M3nU" element={<Menu />} />
<Route path="/m3nU" element={<Menu />} />
<Route path="/M3NV" element={<Menu />} />
<Route path="/m3NV" element={<Menu />} />
<Route path="/MenU" element={<Menu />} />
<Route path="/Menv" element={<Menu />} />
<Route path="/MENv" element={<Menu />} />
<Route path="/mENv" element={<Menu />} />
<Route path="/M3Nuv" element={<Menu />} />
<Route path="/m3Nuv" element={<Menu />} />
<Route path="/M3NVv" element={<Menu />} />
<Route path="/m3NVv" element={<Menu />} />
<Route path="/MenUv" element={<Menu />} />
<Route path="/Menvv" element={<Menu />} />
<Route path="/MENvv" element={<Menu />} />
<Route path="/mENvv" element={<Menu />} />
<Route path="/M3nUv" element={<Menu />} />
<Route path="/m3nUv" element={<Menu />} />
<Route path="/M3NVv" element={<Menu />} />
<Route path="/m3NVv" element={<Menu />} />
<Route path="/MenUv" element={<Menu />} />
<Route path="/Menvv" element={<Menu />} />
<Route path="/MENuv" element={<Menu />} />
<Route path="/mENuv" element={<Menu />} />
<Route path="/M3nuv" element={<Menu />} />
<Route path="/m3nuv" element={<Menu />} />
<Route path="/M3nvv" element={<Menu />} />
<Route path="/m3nvv" element={<Menu />} />
<Route path="/Menvv" element={<Menu />} />
<Route path="/menvv" element={<Menu />} />
<Route path="/MENVv" element={<Menu />} />
<Route path="/mENVv" element={<Menu />} />
<Route path="/M3nuv" element={<Menu />} />
<Route path="/m3nuv" element={<Menu />} />
<Route path="/M3nvv" element={<Menu />} />
<Route path="/m3nvv" element={<Menu />} />
<Route path="/Menvv" element={<Menu />} />
<Route path="/menvv" element={<Menu />} />
<Route path="/MENVv" element={<Menu />} />
<Route path="/mENVv" element={<Menu />} />
{/*Modos de escrever menu no local host */}


{/*Modos de escrever Cardapio no localhost */}
        <Route path="/Cardapio" element={<Menu />} />
        <Route path="/cardapio" element={<Menu />} />
        <Route path="/Cardápio" element={<Menu />} />
        <Route path="/cardápio" element={<Menu />} />
        <Route path="/Cardapio" element={<Menu />} />
<Route path="/cardapio" element={<Menu />} />
<Route path="/CARDAPIO" element={<Menu />} />
<Route path="/C4rdapio" element={<Menu />} />
<Route path="/c4rdapio" element={<Menu />} />
<Route path="/C4RDAPIO" element={<Menu />} />
<Route path="/Car1dapio" element={<Menu />} />
<Route path="/car1dapio" element={<Menu />} />
<Route path="/CAR1DAPIO" element={<Menu />} />
<Route path="/Card4pio" element={<Menu />} />
<Route path="/card4pio" element={<Menu />} />
<Route path="/CARD4PIO" element={<Menu />} />
<Route path="/Cardap1o" element={<Menu />} />
<Route path="/cardap1o" element={<Menu />} />
<Route path="/CARDAP1O" element={<Menu />} />
<Route path="/Cardapi0" element={<Menu />} />
<Route path="/cardapi0" element={<Menu />} />
<Route path="/CARDAPI0" element={<Menu />} />
<Route path="/C4r1dapio" element={<Menu />} />
<Route path="/c4r1dapio" element={<Menu />} />
<Route path="/C4R1DAPIO" element={<Menu />} />
<Route path="/C4rd4pio" element={<Menu />} />
<Route path="/c4rd4pio" element={<Menu />} />
<Route path="/C4RD4PIO" element={<Menu />} />
<Route path="/C4rdap1o" element={<Menu />} />
<Route path="/c4rdap1o" element={<Menu />} />
<Route path="/C4RDAP1O" element={<Menu />} />
<Route path="/C4rdapi0" element={<Menu />} />
<Route path="/c4rdapi0" element={<Menu />} />
<Route path="/C4RDAPI0" element={<Menu />} />
<Route path="/Car1d4pio" element={<Menu />} />
<Route path="/car1d4pio" element={<Menu />} />
<Route path="/CAR1D4PIO" element={<Menu />} />
<Route path="/Car1dap1o" element={<Menu />} />
<Route path="/car1dap1o" element={<Menu />} />
<Route path="/CAR1DAP1O" element={<Menu />} />
<Route path="/Car1dapi0" element={<Menu />} />
<Route path="/car1dapi0" element={<Menu />} />
<Route path="/CAR1DAPI0" element={<Menu />} />
<Route path="/Card4p1o" element={<Menu />} />
<Route path="/card4p1o" element={<Menu />} />
<Route path="/CARD4P1O" element={<Menu />} />
<Route path="/Card4pi0" element={<Menu />} />
<Route path="/card4pi0" element={<Menu />} />
<Route path="/CARD4PI0" element={<Menu />} />
<Route path="/Cardap10" element={<Menu />} />
<Route path="/cardap10" element={<Menu />} />
<Route path="/CARDAP10" element={<Menu />} />
<Route path="/C4r1d4pio" element={<Menu />} />
<Route path="/c4r1d4pio" element={<Menu />} />
<Route path="/C4R1D4PIO" element={<Menu />} />
<Route path="/C4r1dap1o" element={<Menu />} />
<Route path="/c4r1dap1o" element={<Menu />} />
<Route path="/C4R1DAP1O" element={<Menu />} />
<Route path="/C4r1dapi0" element={<Menu />} />
<Route path="/c4r1dapi0" element={<Menu />} />
<Route path="/C4R1DAPI0" element={<Menu />} />
<Route path="/C4rd4p1o" element={<Menu />} />
<Route path="/c4rd4p1o" element={<Menu />} />
<Route path="/C4RD4P1O" element={<Menu />} />
<Route path="/C4rd4pi0" element={<Menu />} />
<Route path="/c4rd4pi0" element={<Menu />} />
<Route path="/C4RD4PI0" element={<Menu />} />
<Route path="/C4rdap10" element={<Menu />} />
<Route path="/c4rdap10" element={<Menu />} />
<Route path="/C4RDAP10" element={<Menu />} />
<Route path="/Car1d4p1o" element={<Menu />} />
<Route path="/car1d4p1o" element={<Menu />} />
<Route path="/CAR1D4P1O" element={<Menu />} />
<Route path="/Car1d4pi0" element={<Menu />} />
<Route path="/car1d4pi0" element={<Menu />} />
<Route path="/CAR1D4PI0" element={<Menu />} />
<Route path="/Car1dap10" element={<Menu />} />
<Route path="/car1dap10" element={<Menu />} />
<Route path="/CAR1DAP10" element={<Menu />} />
<Route path="/Card4p10" element={<Menu />} />
<Route path="/card4p10" element={<Menu />} />
<Route path="/CARD4P10" element={<Menu />} />
<Route path="/Card4pi0" element={<Menu />} />
<Route path="/card4pi0" element={<Menu />} />
<Route path="/CARD4PI0" element={<Menu />} />
<Route path="/Cardap10" element={<Menu />} />
<Route path="/cardap10" element={<Menu />} />
<Route path="/CARDAP10" element={<Menu />} />
<Route path="/C4r1d4p1o" element={<Menu />} />
<Route path="/c4r1d4p1o" element={<Menu />} />
<Route path="/C4R1D4P1O" element={<Menu />} />
<Route path="/C4r1d4pi0" element={<Menu />} />
<Route path="/c4r1d4pi0" element={<Menu />} />
<Route path="/C4R1D4PI0" element={<Menu />} />
<Route path="/C4r1dap10" element={<Menu />} />
<Route path="/c4r1dap10" element={<Menu />} />
<Route path="/C4R1DAP10" element={<Menu />} />
<Route path="/C4rd4p10" element={<Menu />} />
<Route path="/c4rd4p10" element={<Menu />} />
<Route path="/C4RD4P10" element={<Menu />} />
<Route path="/C4rd4pi0" element={<Menu />} />
<Route path="/c4rd4pi0" element={<Menu />} />
<Route path="/C4RD4PI0" element={<Menu />} />
<Route path="/C4rdap10" element={<Menu />} />
<Route path="/c4rdap10" element={<Menu />} />
<Route path="/C4RDAP10" element={<Menu />} />
<Route path="/Car1d4p10" element={<Menu />} />
<Route path="/car1d4p10" element={<Menu />} />
<Route path="/CAR1D4P10" element={<Menu />} />
<Route path="/Car1d4pi0" element={<Menu />} />
<Route path="/car1d4pi0" element={<Menu />} />
<Route path="/CAR1D4PI0" element={<Menu />} />
<Route path="/Car1dap10" element={<Menu />} />
<Route path="/car1dap10" element={<Menu />} />
<Route path="/CAR1DAP10" element={<Menu />} />
<Route path="/Card4p10" element={<Menu />} />
<Route path="/card4p10" element={<Menu />} />
<Route path="/CARD4P10" element={<Menu />} />
<Route path="/Card4pi0" element={<Menu />} />
<Route path="/card4pi0" element={<Menu />} />
<Route path="/CARD4PI0" element={<Menu />} />
<Route path="/Cardap10" element={<Menu />} />
<Route path="/cardap10" element={<Menu />} />
<Route path="/CARDAP10" element={<Menu />} />
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