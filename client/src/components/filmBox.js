import React from 'react';
import FilmItem from './FilmItem';

export default function FilmBox({ films }) {
  return (
    <div className='film-box'>
      {films.results.map((film) => (
        <FilmItem key={film.release_date} film={film} />
      ))}
    </div>
  );
}
