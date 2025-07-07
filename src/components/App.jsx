import Header from './Header/Header';
import Dashboard from './Dashboard/Dashboard';
import AboutMe from './AboutMe/AboutMe';
import Reviews from './Reviews/Reviews';
import AboutUs from './AboutUs/AboutUs';
import MyStory from './AboutMe/MyStory';
import Hobbies from './AboutMe/Hobbies';
import Contact from './AboutMe/Contact';
import SiteHistory from './AboutUs/SiteHistory';
import SiteMission from './AboutUs/SiteMission';

import { Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Aninhamento de componentes Route dentro de um componente Routes e definição de caminhos e atributos dos elementos para renderização dos mesmos. */}
      <Routes>
        {/* Definição de uma rota para o caminho '/' que renderiza o componente Dashboard na página inicial. */}
        <Route path="/" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="/about-me/my-story" element={<MyStory />} />
          <Route path="/about-me/hobbies" element={<Hobbies />} />
          <Route path="/about-me/contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="/about-us/site-history" element={<SiteHistory />} />
          <Route path="/about-us/site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
