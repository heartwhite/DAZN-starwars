import React from 'react';
import { gql, useQuery } from '@apollo/client';
import posterUrls from '../static/imageAddresses';

import CharacterItem from './CharacterItem';

const FilmDetails = ({ id }) => {
  const GET_FILM = gql`
    query getFilm($id: ID!) {
      Film(id: $id) {
        title
        director
        releaseDate
        openingCrawl
        planets {
          name
          id
        }
        starships {
          name
          id
        }
        characters {
          name
          id
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_FILM, { variables: { id: id } });

  const render = () => {
    if (loading) {
      return <h2>Gathering Data</h2>;
    }
    if (error) {
      return <h2>An Error Occurred</h2>;
    }
    if (data) {
      const {
        title,
        releaseDate,
        director,
        openingCrawl,
        planets,
        starships,
        characters,
      } = data.Film;

      const date = new Date(releaseDate).getFullYear();
      return (
        <div className='film-details'>
          <div className='poster'>
            <img src={posterUrls[title]} alt={`${title} poster`} height='200px' width='auto' />
          </div>
          <div className='details-'>
            <div className='film-head'>
              <h2>{title}</h2>
              <h3 style={{ color: 'blue', fontWeight: '500' }}>Released at {date}</h3>
              <h3 style={{ color: 'gray', fontWeight: '500' }}>Director: {director}</h3>
            </div>
          </div>

          <div className='container'>
            <div className='opening-crawl'>
              <p>{openingCrawl}</p>
            </div>
            <div className='characters-header'>
              <h2>Characters</h2>
            </div>
            <div className='characters-box'>
              {characters.map((character) => (
                <CharacterItem key={character.id} character={character} />
              ))}
            </div>
            <div className='film-extra'>
              <div className='planets'>
                <h3>* Planets *</h3>
                <ul>
                  {planets.map((planet) => {
                    return <li key={planet.id}>{planet.name}</li>;
                  })}
                </ul>
              </div>
              <div className='starships'>
                <h3>* Starships *</h3>
                <ul>
                  {starships.map((starship) => {
                    return <li key={starship.id}>{starship.name}</li>;
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };
  return render();
};

export default FilmDetails;
