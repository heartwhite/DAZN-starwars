import React from 'react';

export default function FilmItem({ film }) {
  return (
    <div className='film-item'>
      <div className='film-head'>
        <h2>{film.title}</h2>
        <h3>{film.releaseDate}</h3>
      </div>
      <ul className='characters'></ul>
      <div className='opening-crawl'>
        <p>{film.openingCrawl}</p>
      </div>
    </div>
  );
}
