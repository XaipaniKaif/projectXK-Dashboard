import './css/header.css';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="header">
      {!isMobile && (
        <>
          <nav>
            <ul>
              <li><a href="#my">О мне</a></li>
              <li><a href="#FAQ">FAQ</a></li>
              <li><a href="#commands">Команды</a></li>
            </ul>
          </nav>
          <button> Войти в 
            <img 
              src='https://yt3.googleusercontent.com/vQL1Vse9Ocd8W0TH-o4llshnAD123pvltOR6HUORx9RAN1-mpAJuLyAKcSUS89rsqM09OV6CTww=s900-c-k-c0x00ffffff-no-rj' 
              alt='Discord' 
              className='icon'
            />
          </button>
        </>
      )}
      {isMobile && (
        <>
          <div className='buttons'>
            <button id="menuToggle" onClick={toggleMenu}> ☰ </button>
            <button className='login'>Войти в <img 
                      src='https://yt3.googleusercontent.com/vQL1Vse9Ocd8W0TH-o4llshnAD123pvltOR6HUORx9RAN1-mpAJuLyAKcSUS89rsqM09OV6CTww=s900-c-k-c0x00ffffff-no-rj' 
                      alt='Discord' 
                      className='icon'/>
            </button>
            <div id="sideMenu" className={`side-menu ${isOpen ? 'open' : ''}`}>
                    <a href="#" className="closebtn" onClick={toggleMenu}>&times;</a>
                    <a href="#my" onClick={toggleMenu}>О мне</a>
                    <a href="#FAQ" onClick={toggleMenu}>FAQ</a>
                    <a href="#commands" onClick={toggleMenu}>Команды</a>
            </div>
          </div>          
          {isOpen && <div className="menu-overlay open" onClick={toggleMenu}></div>}
        </>
      )}
    </div>
  );
};

export default Header;
