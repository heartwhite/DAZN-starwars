import React from 'react';
import FilmItem from './filmItem';

export default function FilmBox({ films }) {
  return (
    <div className='filmBox'>
      {films.results.map((e) => (
        <FilmItem key={e.release_date} film={e} />
      ))}
    </div>
  );
}
