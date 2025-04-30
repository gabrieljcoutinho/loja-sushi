import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Header/header.css';
import '../CSS/Header/lista.css';
import '../CSS/Header/links.css';
import logoImage from '../img/iconeDaPagina.png'; // Importe sua imagem aqui

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const navListRef = useRef(null);
  const activeBgRef = useRef(null);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const updateBackground = () => {
      updateActiveBackgroundPosition(activeLink);
    };

    updateBackground();

    window.addEventListener('resize', updateBackground);

    return () => {
      window.removeEventListener('resize', updateBackground);
    };
  }, [activeLink]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
  };

  const updateActiveBackgroundPosition = (path) => {
    if (navListRef.current && activeBgRef.current) {
      const activeItem = Array.from(navListRef.current.children).find(
        (li) => li.querySelector('a')?.getAttribute('href') === path
      );

      if (activeItem) {
        const linkElement = activeItem.querySelector('a');
        if (linkElement) {
          const { offsetLeft, offsetWidth, offsetTop, offsetHeight } = linkElement;
          activeBgRef.current.style.transform = `translateX(${offsetLeft}px)`;
          activeBgRef.current.style.width = `${offsetWidth}px`;
          activeBgRef.current.style.height = `${offsetHeight}px`;
          activeBgRef.current.style.top = `${offsetTop}px`;
        }
      } else {
        activeBgRef.current.style.width = '0px';
        activeBgRef.current.style.transform = `translateX(0px)`;
        activeBgRef.current.style.height = '0px';
        activeBgRef.current.style.top = '0px';
      }
    }
  };

  return (
    <header className="header-container">
      <img src={logoImage} alt="Logo do Site"  title='Logo do Site' className="header-logo" />
      <nav className="navigation">
        <ul className="nav-list" ref={navListRef}>
          <div ref={activeBgRef} className="active-background" ></div>

          <li className="nav-item">
            <Link to="/" className={`nav-link ${activeLink === '/' ? 'active' : ''}`} onClick={() => handleLinkClick('/')} title='Clicar'  >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/https://Loja-loja-de-sushi" className={`nav-link ${activeLink === '/Loja' ? 'active' : ''}`} onClick={() => handleLinkClick('/Loja')} title='Clicar' >
              Loja
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/Reserva" className={`nav-link ${activeLink === '/Reserva' ? 'active' : ''}`} onClick={() => handleLinkClick('/Reserva')} title='Clicar' >
              Reserva
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;