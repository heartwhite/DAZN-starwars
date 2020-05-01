import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../static/profile-avatar.png';
import { Card, Image } from 'semantic-ui-react';
import styled from 'styled-components';

import { gql, useQuery } from '@apollo/client';

const ActorCard = styled(Card)`
  flex-direction: row !important;
  width: 100% !important;
  @media screen and (max-width: 700px) {
    flex-direction: column !important;
  }
`;

const CharacterImage = styled(Image)`
  max-height: 350px;
  @media screen and (max-width: 700px) {
    align-self: center !important;
  }
`;

const ActorPrimaryInfo = styled(Card.Content)`
  min-width: 150px;
  max-width: 250px;
  @media screen and (max-width: 700px) {
    align-self: center !important;
  }
`;

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
          <Card.Content
            style={{ display: 'flex', justifyContent: 'space-around' }}
            className=' responsive-flex'
            textAlign='left'
          >
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
        </ActorCard>
      </Card.Group>
    </>
  );
};

export default CharacterCard;
