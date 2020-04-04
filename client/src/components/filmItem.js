import React from 'react';
export default function FilmItem({ film }) {
  return (
    <div className='filmItem'>
      <div className='filmHead'>
        <h2>{film.title}</h2>
        <h3>{film.release_date}</h3>
      </div>
      <div className='openingCrawl'>
        <span>Opening Crawl</span>
        <p>{film.opening_crawl}</p>
      </div>
    </div>
  );
}
