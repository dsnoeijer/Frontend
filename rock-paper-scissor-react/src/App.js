import { useState } from 'react';
import TopBar from './components/Home/TopBar/TopBar';
import Main from './components/Home/Main/Main';
import Rules from './components/Home/Rules/Rules';
import './App.css';

function App() {
  const score = localStorage.getItem('score');

  return (
    <div className="App">
      <div className="content">
        <TopBar score={score} />
        <Main />
        <Rules />
      </div>
    </div>
  );
}

export default App;
