import { Footer } from '../Footer'
import { Main } from '../Main'
import './Header.css'

export function Header() {

    return (
        <>
        <div className='header'>
          <header className='container'>
            <div className='titulo'>
              <img src="public/img-logo.png" alt="" className='img-logo'/>
            </div>
          <nav className='nav-header'> 
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#galeria">Galeria</a></li>
              <li><a href="#episodios">Episodios</a></li>
            </ul>
          </nav>
          </header>
        </div>   
        </>
    )
}