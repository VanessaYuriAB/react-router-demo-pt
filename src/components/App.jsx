import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import AboutMe from './AboutMe/AboutMe';
import Reviews from './Reviews/Reviews';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Aninhamento de um componente Route dentro de um componente Routes e definição do caminho e atributos do elemento para renderização do Dashboard na página inicial. */}
      <Routes>
        {/* Definição de uma rota para o caminho '/' que renderiza o componente Dashboard. */}
        <Route path="/" element={<Dashboard />} />
        {/* Definição de uma rota para o caminho '/reviews' que renderiza o componente Reviews. */}
        <Route path="/reviews" element={<Reviews />} />
        {/* Definição de uma rota para o caminho '/about-me' que renderiza o componente AboutMe. */}
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </div>
  );
}

export default App;
