import './css/header.css'
function Header() { 
    return (
      <div className='header'>
          <nav>
            <ul>
              <li><a href ='#my'>О мне</a></li> 
              <li><a href='#FAQ'>FAQ</a></li>
              <li><a href='#commands'>Команды</a></li>
            </ul>
          </nav>
          <button>
            Войти в <img src='https://yt3.googleusercontent.com/vQL1Vse9Ocd8W0TH-o4llshnAD123pvltOR6HUORx9RAN1-mpAJuLyAKcSUS89rsqM09OV6CTww=s900-c-k-c0x00ffffff-no-rj' alt='Disocrd' className='icon'></img>
          </button>
      </div>
    )
}

export default Header