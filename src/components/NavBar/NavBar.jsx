import { NavLink } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  // customClassName é uma função que aceita um objeto como um parâmetro.
  // Esse objeto tem uma propriedade isActive que é verdadeira se o link estiver ativo.
  const customClassName = ({ isActive }) =>
    'menu__link' + (isActive ? ' menu__link_active' : '');

  return (
    <nav className="menu">
      {/* Se o link estiver ativo, a classe menu__link_active será adicionada à lista de classes. */}
      <NavLink to="/" className={customClassName}>
        Pagina Inicial
      </NavLink>
      <NavLink to="/reviews" className={customClassName}>
        Avaliações de Emoji
      </NavLink>
      <NavLink to="/about-me" className={customClassName}>
        Sobre Mim
      </NavLink>
      <NavLink to="/about-us" className={customClassName}>
        Sobre Nós
      </NavLink>
    </nav>
  );
}

export default NavBar;
