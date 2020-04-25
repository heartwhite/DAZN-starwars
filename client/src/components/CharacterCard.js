import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../static/profile-avatar.png';
import { Card, Image } from 'semantic-ui-react';

import { gql, useQuery } from '@apollo/client';

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
        id
      }
    }
  }
`;

const CharacterCard = ({ characterId }) => {
  const { loading, data, error } = useQuery(GET_CHARACTER, { variables: { id: characterId } });

  if (loading) {
    return <h2>Gathering Data</h2>;
  }
  if (error) {
    return <h2>An Error Occurred</h2>;
  }
  const { name, birthYear, height, gender, skinColor, hairColor, films } = data.Person;

  return (
    <div className='main-content-container'>
      <Card.Group>
        <Card className='responsive-flex'>
          <Image className='character-image center-in-mobile' size='medium' src={avatar} />
          <Card.Content
            style={{ display: 'flex', justifyContent: 'space-around' }}
            className=' responsive-flex'
            textAlign='left'
          >
            <Card.Content className='center-in-mobile primary-info' textAlign='left'>
              <h3>{name}</h3>
              <Card.Description>
                <p>Birth: {birthYear}</p>
                <p>Gender: {gender}</p>
                <p>Tall: {height}</p>
                <p>SkinColor: {skinColor}</p>
                <p>HairColor: {hairColor}</p>
              </Card.Description>{' '}
            </Card.Content>

            {films.length > 0 && (
              <Card.Content className='center-in-mobile' textAlign='left'>
                <h3>Movies</h3>
                {films.map((film) => (
                  <p key={film.id}>
                    <Link to={`/film/${film.id}`}>{film.title}</Link>
                    <br />
                  </p>
                ))}
              </Card.Content>
            )}
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  );
};

export default CharacterCard;
