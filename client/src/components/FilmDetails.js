import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Item, Icon } from 'semantic-ui-react';
import CharacterItem from './CharacterItem';
import {
  StyledItem,
  CharactersButton,
  CharactersList,
  MovieInfoText,
  PageContainer,
} from './styledComponents';

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
      <PageContainer>
        <Item.Group>
          <StyledItem>
            <Item.Image size='medium' src={posterUrls[title]} />

            <Item.Content>
              <Item.Header>{title}</Item.Header>
              <MovieInfoText>
                <br />
                <strong>Release: </strong>
                {date}
              </MovieInfoText>
              <MovieInfoText>
                <strong>Director: </strong>
                {director}
              </MovieInfoText>
              <MovieInfoText>
                <strong>Producer{producers.length > 1 && 's'}: </strong>
                {producers.join(', ')}
              </MovieInfoText>
              <MovieInfoText>
                <strong>Planets: </strong>
                {planets.map((planet) => planet.name).join(', ')}
              </MovieInfoText>
              <Item.Description>
                <MovieInfoText>
                  <strong>Opening Crawl: </strong>
                  <br />
                  {openingCrawl}
                </MovieInfoText>{' '}
              </Item.Description>
              <Item.Content>
                <CharactersButton onClick={() => setCollapsed(!collapsed)}>
                  Characters
                  <Icon name={`angle ${collapsed ? 'down' : 'up'}`} />
                </CharactersButton>
                {!collapsed && (
                  <CharactersList stackable itemsPerRow='3'>
                    {characters.map((character) => (
                      <CharacterItem key={character.id} character={character} />
                    ))}
                  </CharactersList>
                )}
              </Item.Content>
            </Item.Content>
          </StyledItem>
        </Item.Group>
      </PageContainer>
    );
  }
};

export default FilmDetails;
