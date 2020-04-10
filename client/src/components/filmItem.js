import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function FilmItem({ film }) {
  const [characters, setCharacters] = useState([]);
  async function getCharacters(urlArr) {
    const charactersData = await Promise.all(
      urlArr.map((url) => axios.get(`${url}?format=json`).then((res) => res.json())),
    );
    console.log('charactersData', charactersData);
    setCharacters(charactersData);
  }
  useEffect(() => {
    getCharacters(film.characters);
    console.log('characters', characters);
  }, []);
  return (
    <div className='film-item'>
      <div className='film-head'>
        <h2>{film.title}</h2>
        <h3>{film.release_date}</h3>
      </div>
      <ul className='characters'>
        {film.characters.map((c) => (
          <li>{c}</li>
        ))}
      </ul>
      <div className='opening-crawl'>
        <p>{film.opening_crawl}</p>
      </div>
    </div>
  );
}
