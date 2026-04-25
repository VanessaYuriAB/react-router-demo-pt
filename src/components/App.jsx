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

import Review from './Review/Review';

import PageNotFound from './PageNotFound/PageNotFound';

import { Routes, Route } from 'react-router-dom';

import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Captura os dados de avaliação a partir do servidor
    fetch('https://emoji-critic.pt-br.tripleten-services.com/v1/reviews')
      .then((res) => {
        // Verifica se a resposta do servidor é bem-sucedida e converte a resposta em JSON
        return res.json();
      })
      .then((data) => {
        // Envia o corpo da resposta para a função setter, atualizando o estado 'reviews'
        // com os dados recebidos
        setReviews(data);
      })
      .catch(console.error); // Captura e exibe erros que possam ocorrer durante a
    // requisição
  }, []); // Um array de dependência vazio significa que o hook roda apenas quando o
  // componente é iniciado.

  return (
    <div className="App">
      <Header />
      {/* Aninhamento de componentes Route dentro de um componente Routes e definição de 
      caminhos e atributos dos elementos para renderização dos mesmos. */}
      <Routes>
        {/* Definição de uma rota para o caminho '*' (curinga) que renderiza o componente 
        PageNotFound quando nenhuma outra rota é correspondida. */}
        <Route path="*" element={<PageNotFound />} />
        {/* Definição de uma rota para o caminho '/' que renderiza o componente Dashboard 
        na página inicial. */}
        <Route path="/" element={<Dashboard />} />
        {/* avaliações passadas como prop para o componente Reviews. */}
        <Route path="/reviews" element={<Reviews reviews={reviews} />} />
        <Route path="/reviews/:reviewId" element={<Review reviews={reviews} />} />
        <Route path="/about-me" element={<AboutMe />}>
          <Route path="my-story" element={<MyStory />} />
          <Route path="hobbies" element={<Hobbies />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/about-us" element={<AboutUs />}>
          <Route path="site-history" element={<SiteHistory />} />
          <Route path="site-mission" element={<SiteMission />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
