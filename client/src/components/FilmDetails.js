import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Item, Icon } from 'semantic-ui-react';

import CharacterItem from './CharacterItem';

import posterUrls from '../static/imageAddresses';

const GET_FILM = gql`
  query getFilm($id: ID!) {
    Film(id: $id) {
      title
      director
      producers
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

const FilmDetails = ({ id }) => {
  const [collapsed, setCollapsed] = useState(true);
  const { loading, data, error } = useQuery(GET_FILM, { variables: { id } });

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
      producers,
      openingCrawl,
      planets,
      characters,
    } = data.Film;

    const date = new Date(releaseDate).getFullYear();
    return (
      <div className='main-content-container'>
        <Item.Group>
          <Item className='text-align-left'>
            <Item.Image size='medium' src={posterUrls[title]} />

            <Item.Content>
              <Item.Header>{title}</Item.Header>
              <p className='size24'>
                <br />
                <strong>Release: </strong>
                {date}
              </p>
              <p className='size24'>
                <strong>Director: </strong>
                {director}
              </p>
              <p className='size24'>
                <strong>Producer{producers.length > 1 && 's'}: </strong>
                {producers.join(', ')}
              </p>
              <p className='size24'>
                <strong>Planets: </strong>
                {planets.map((planet) => planet.name).join(', ')}
              </p>
              <Item.Description>
                <p>
                  <strong className='size24'>Opening Crawl: </strong>
                  {openingCrawl}
                </p>{' '}
              </Item.Description>
              <Item.Content>
                <h3 onClick={() => setCollapsed(!collapsed)}>
                  Characters
                  <Icon name={`angle ${collapsed ? 'down' : 'up'}`} />
                </h3>
                {!collapsed && (
                  <Item.Group className='flex three-rows'>
                    {characters.map((character) => (
                      <CharacterItem character={character} small={true} />
                    ))}
                  </Item.Group>
                )}
              </Item.Content>
            </Item.Content>
          </Item>
        </Item.Group>
      </div>
    );
  }
};

export default FilmDetails;
