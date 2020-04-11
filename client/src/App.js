import React, { useState } from 'react';
import { gql, useQuery } from '@apollo/client';

import './App.css';
import FilmBox from './components/FilmBox';

function App() {
  const GET_DATA = gql`
    query getData {
      allFilms {
        title
        releaseDate
        openingCrawl
        characters {
          name
          id
        }
      }
    }
  `;

  const { loading, data, error } = useQuery(GET_DATA);

  return (
    <div className='app'>
      <header className='app-header'>
        <h1 className='big-header'>WELCOME TO STARWARS UNIVERSE</h1>
      </header>
      {data ? (
        <FilmBox films={data.allFilms} />
      ) : loading ? (
        <h2>Gathering Data</h2>
      ) : (
        error && <h2>an error occurred</h2>
      )}
    </div>
  );
}

export default App;
