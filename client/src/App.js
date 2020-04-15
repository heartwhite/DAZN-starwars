import React from 'react';

import './App.css';
import FilmBox from './components/FilmBox';

function App() {
  return (
    <div className='app'>
      <header className='app-header'>
        <h1 className='big-header'>WELCOME TO STARWARS UNIVERSE</h1>
      </header>
      <FilmBox />
    </div>
  );
}

export default App;
