import { Outlet, Link } from 'react-router-dom';

import './AboutUs.css';

function AboutUs() {
  return (
    <div className="about-us">
      <p>Encontre mais informações sobre nosso site aqui.</p>
      <ul>
        <li>
          <Link to="site-history">Nossa História</Link>
        </li>
        <li>
          <Link to="site-mission">Nossa Missão</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default AboutUs;
