import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import FilmBox from './components/filmBox';

function App() {
  const [films, setFilms] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axios.get('https://swapi.co/api/films/?format=json');
      setFilms(response.data);
      console.log('DATA', response.data);
    }
    getData();
  }, []);
  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='bigHeader'>WELCOME TO STARWARS UNIVERSE</h1>
      </header>
      {films && <FilmBox films={films} />}
    </div>
  );
}

export default App;
