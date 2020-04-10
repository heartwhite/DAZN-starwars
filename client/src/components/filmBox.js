import React from 'react';
import FilmItem from './FilmItem';

export default function FilmBox({ films }) {
  return (
    <div className='film-box'>
      {films.map((film) => (
        <FilmItem key={film.releaseDate} film={film} />
      ))}
    </div>
  );
}
