import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Item, Icon, Card } from 'semantic-ui-react';
import styled from 'styled-components';
import CharacterItem from './CharacterItem';

import posterUrls from '../static/imageAddresses';

const StyledItem = styled(Item)`
  text-align: left;
`;
const CharactersButton = styled(Item.Header)`
  font-size: 24px;
  margin: 12px;
  cursor: pointer;
`;

const CharactersList = styled(Card.Group)`
  @media screen and (max-width: 700px) {
    margin-top: 10px !important;
  }
`;
const MovieInfoText = styled.p`
  font-size: 24px;
  @media screen and (max-width: 700px) {
    font-size: 18px;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  height: auto;
`;

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
