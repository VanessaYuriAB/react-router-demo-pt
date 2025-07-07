import './AboutMe.css';
import { Outlet, Link } from 'react-router-dom';

function AboutMe() {
  return (
    <div className="about">
      <p>Eu sou uma pessoa simples. Eu vejo Emojis, eu escrevo avaliações.</p>
      <ul className="links">
        <li>
          <Link to="my-story">Minha História</Link>
        </li>
        <li>
          <Link to="hobbies">Hobbies</Link>
        </li>
        <li>
          <Link to="contact">Informações de Contato</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutMe;
