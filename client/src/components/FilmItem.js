import React from 'react';

import { Link } from 'react-router-dom';

export default function FilmItem({ film: { title, releaseDate, id }, posterUrl }) {
  const date = new Date(releaseDate).getFullYear();
  return (
    <div className='film-item'>
      <div className='film-base'>
        <div className='image-holder'>
          <img src={posterUrl} alt='' height='200px' width='auto' />
        </div>
        <div className='film-head'>
          <Link to={`/film/${id}`}>
            <h2>{title}</h2>
          </Link>
          <h3 className='h3-info'>Released at {date}</h3>
        </div>
      </div>
    </div>
  );
}
