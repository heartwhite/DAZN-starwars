import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import posterUrls from '../static/imageAddresses';

import FilmItem from './FilmItem';
import Search from './Search';
import CharacterCard from './CharacterCard';

export default function FilmBox() {
  const [extendedId, setExtendedId] = useState(null);
  const [characterId, setCharacterId] = useState(false);

  const GET_DATA = gql`
    query getData {
      allFilms {
        id
        title
        releaseDate
        openingCrawl
        characters {
          name
          id
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_DATA);

  const render = () => {
    if (characterId) {
      return (
        <>
          <button
            onClick={() => {
              setCharacterId(false);
              setExtendedId(null);
            }}
          >
            Back to Search
          </button>
          <CharacterCard characterId={characterId} />
        </>
      );
    }
    if (loading) {
      return <h2>Gathering Data</h2>;
    }
    if (error) {
      return <h2>An Error Occurred</h2>;
    }
    return (
      <>
        <Search setCharacterId={setCharacterId} />
        <div className='film-box'>
          {data.allFilms.map((film, i) => (
            <FilmItem
              key={film.releaseDate}
              film={film}
              extendedId={extendedId}
              setExtendedId={setExtendedId}
              posterUrl={posterUrls[i]}
              setCharacterId={setCharacterId}
            />
          ))}
        </div>
      </>
    );
  };

  return <div className='container'>{render()}</div>;
}
