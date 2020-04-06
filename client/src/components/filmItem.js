import React from 'react';
export default function FilmItem({ film }) {
  return (
    <div className='film-item'>
      <div className='film-head'>
        <h2>{film.title}</h2>
        <h3>{film.release_date}</h3>
      </div>
      <div className='opening-crawl'>
        <p>{film.opening_crawl}</p>
      </div>
    </div>
  );
}
