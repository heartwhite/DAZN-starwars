import React, { useState, Fragment } from 'react';
import FilmItem from './FilmItem';
import Search from './Search';
import CharacterCard from './CharacterCard';
import posterUrls from '../static/imageAddresses';

export default function FilmBox({ films }) {
  const [extendedIndex, setExtendedIndex] = useState('');
  const [characterId, setCharacterId] = useState(false);
  return (
    <div className='container'>
      {!characterId ? (
        <>
          <Search setCharacterId={setCharacterId} />
          <div className='film-box'>
            {films.map((film, i) => (
              <FilmItem
                key={film.releaseDate}
                film={film}
                extended={i === extendedIndex ? true : false}
                setExtendedIndex={() => setExtendedIndex(i)}
                setExtendedFalse={() => setExtendedIndex('')}
                posterUrl={posterUrls[i]}
                setCharacterId={setCharacterId}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              setCharacterId(false);
              setExtendedIndex('');
            }}
          >
            Back to Search
          </button>
          <CharacterCard characterId={characterId} />
        </>
      )}
    </div>
  );
}
