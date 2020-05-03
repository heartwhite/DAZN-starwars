import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../static/profile-avatar.png';
import { Card } from 'semantic-ui-react';
import {
  ActorCard,
  CardContent,
  CharacterImage,
  ActorPrimaryInfo,
  ActorMovies,
} from './styledComponents';

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
    <>
      <Card.Group>
        <ActorCard>
          <CharacterImage size='medium' src={avatar} />
          <CardContent style={{ display: 'flex', justifyContent: 'space-around' }} textAlign='left'>
            <ActorPrimaryInfo textAlign='left'>
              <h2>{name}</h2>
              <Card.Description>
                <p>Birth: {birthYear}</p>
                <p>Gender: {gender}</p>
                <p>Tall: {height}</p>
                <p>Skin Color: {skinColor}</p>
                <p>Hair Color: {hairColor}</p>
              </Card.Description>{' '}
            </ActorPrimaryInfo>

            {films.length > 0 && (
              <ActorMovies textAlign='left'>
                <h2>Movies</h2>
                {films.map((film) => (
                  <p key={film.id}>
                    <Link to={`/film/${film.id}`}>{film.title}</Link>
                    <br />
                  </p>
                ))}
              </ActorMovies>
            )}
          </CardContent>
        </ActorCard>
      </Card.Group>
    </>
  );
};

export default CharacterCard;
