import React, { useState } from 'react';
import CharacterItem from './CharacterItem';
import posterUrls from '../static/imageAddresses';

export default function FilmItem({
  film,
  posterUrl,
  extended,
  setExtendedIndex,
  setExtendedFalse,
}) {
  const date = new Date(film.releaseDate).getFullYear();
  return (
    <div className={`film-item ${extended && 'extended'}`}>
      <div className='film-base'>
        <div className='image-holder'>
          <img src={posterUrl} alt='' height='200px' width='auto' />
        </div>
        <div className='film-head'>
          <h2>{film.title}</h2>
          <h3 style={{ color: 'blue', fontWeight: '500' }}>Released at {date}</h3>
          <button
            onClick={() => {
              extended ? setExtendedFalse() : setExtendedIndex();
            }}
          >
            {extended ? 'Less Info' : 'More Info'}
          </button>
        </div>
      </div>
      {extended && (
        <div className='container'>
          <div className='opening-crawl'>
            <p>{film.openingCrawl}</p>
          </div>
          <div className='characters-box'>
            {film.characters.map((character) => (
              <CharacterItem key={character.id} character={character} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
