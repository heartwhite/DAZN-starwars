import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Card } from 'semantic-ui-react';

import posterUrls from '../static/imageAddresses';

import FilmItem from './FilmItem';

const GET_DATA = gql`
  query getData {
    allFilms {
      id
      title
      releaseDate
    }
  }
`;

export default function FilmBox() {
  const { loading, data, error } = useQuery(GET_DATA);

  if (loading) {
    return <h2>Gathering Data</h2>;
  }
  if (error) {
    return <h2>An Error Occurred</h2>;
  }
  return (
    <>
      <Card.Group stackable itemsPerRow='2' centered>
        {data.allFilms.map((film) => (
          <FilmItem key={film.id} film={film} posterUrl={posterUrls[film.title]} />
        ))}
      </Card.Group>
    </>
  );
}
