import React from 'react';
import avatar from '../static/profile-avatar.png';
import './componentStyles/characters.css';

import { gql, useQuery } from '@apollo/client';

const CharacterCard = ({ characterId }) => {
  const GET_CHARACTER = gql`
    query getPerson($id: ID!) {
      Person(id: $id) {
        name
        birthYear
        skinColor
        hairColor
        gender
        height
        films {
          id
          title
        }
        starships {
          name
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_CHARACTER, { variables: { id: characterId } });

  const render = () => {
    if (loading) {
      return <h2>Gathering Data</h2>;
    }
    if (error) {
      return <h2>An Error Occurred</h2>;
    }
    const { name, birthYear, height, gender, skinColor, hairColor, films, starships } = data.Person;
    return (
      <div className='character-card'>
        <div className='card-head'>
          <img src={avatar} alt='character-avatar' width='200px' />
          <h4>{name}</h4>
        </div>

        <div className='character-extra-info'>
          <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
            <li>DoB : {birthYear}</li>
            <li>Height : {height}</li>
            <li>Gender : {gender}</li>
            <li>Skin Color : {skinColor}</li>
            <li>Hair Color : {hairColor}</li>
          </ul>
        </div>

        <div className='character-extra-info'>
          {films.length > 0 && (
            <>
              <h3>Films</h3>
              <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                {films.map((film) => (
                  <li key={film.id}>{film.title}</li>
                ))}
              </ul>
            </>
          )}
          {starships.length > 0 && (
            <>
              <h3>StarShips</h3>
              <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                {starships.map((starship) => (
                  <li>{starship.name}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    );
  };

  return render();
};

export default CharacterCard;
