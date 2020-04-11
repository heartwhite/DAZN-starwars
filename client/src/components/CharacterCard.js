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
          title
        }
        starships {
          name
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_CHARACTER, { variables: { id: characterId } });

  return (
    <div className='character-card'>
      {loading ? (
        <h3>Gathering Data</h3>
      ) : error ? (
        <h3>An Error Occurred </h3>
      ) : (
        <>
          <div className='card-head'>
            <img src={avatar} alt='' width='200px' />
            <h4>{data.Person.name}</h4>
          </div>

          <div className='character-extra-info'>
            <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
              <li>DoB : {data.Person.birthYear}</li>
              <li>Height : {data.Person.height}</li>
              <li>Gender : {data.Person.gender}</li>
              <li>Skin Color : {data.Person.skinColor}</li>
              <li>Hair Color : {data.Person.hairColor}</li>
            </ul>
          </div>

          <div className='character-extra-info'>
            {data.Person.films[0] && (
              <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                <h3>Films</h3>
                {data.Person.films.map((film) => (
                  <li>{film.title}</li>
                ))}
              </ul>
            )}
            {data.Person.starships[0] && (
              <ul style={{ listStyleType: 'none', textAlign: 'left' }}>
                <h3>StarShips</h3>
                {data.Person.starships.map((starship) => starship.name)}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CharacterCard;
