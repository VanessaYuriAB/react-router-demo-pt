import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Aninhamento do componente App em um BrowserRouter para que componentes Route funcionem corretamente e possamos criar rotas no nosso aplicativo(página) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
