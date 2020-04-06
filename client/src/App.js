import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FilmBox from './components/FilmBox';

function App() {
  const [films, setFilms] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios.get('https://swapi.co/api/films/?format=json');
      setFilms(response.data);
    }
    getData();
  }, []);

  return (
    <div className='app'>
      <header className='app-header'>
        <h1 className='big-header'>WELCOME TO STARWARS UNIVERSE</h1>
      </header>
      {films ? <FilmBox films={films} /> : <h2>Gathering Data</h2>}
    </div>
  );
}

export default App;
