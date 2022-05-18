import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Store from './components/Store/Store';
import './index.css';
import App from './App';
import Game from './components/Game/Game/Game';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Store>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  </Store>
);