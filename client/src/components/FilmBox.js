import React from 'react';
import { gql, useQuery } from '@apollo/client';

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

  const render = () => {
    if (loading) {
      return <h2>Gathering Data</h2>;
    }
    if (error) {
      return <h2>An Error Occurred</h2>;
    }
    return (
      <>
        <div className='film-box'>
          {data.allFilms.map((film) => (
            <FilmItem key={film.id} film={film} posterUrl={posterUrls[film.title]} />
          ))}
        </div>
      </>
    );
  };

  return <div className='container'>{render()}</div>;
}
