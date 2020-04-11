import React, { useState } from 'react';
import FilmItem from './FilmItem';
import Search from './Search';
import posterUrls from '../static/imageAddresses';

export default function FilmBox({ films }) {
  const [extendedIndex, setExtendedIndex] = useState('');

  return (
    <div className='container'>
      <Search />
      <div className='film-box'>
        {films.map((film, i) => (
          <FilmItem
            key={film.releaseDate}
            film={film}
            extended={i === extendedIndex ? true : false}
            setExtendedIndex={() => setExtendedIndex(i)}
            setExtendedFalse={() => setExtendedIndex('')}
            posterUrl={posterUrls[i]}
          />
        ))}
      </div>
    </div>
  );
}
