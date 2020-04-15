import React, { useState } from 'react';
import CharacterItem from './CharacterItem';

import { gql, useLazyQuery } from '@apollo/client';

const Search = ({ setCharacterId }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const GET_DATA = gql`
    query getData {
      allPersons {
        name
        id
      }
    }
  `;

  const [getData, { loading, data, error }] = useLazyQuery(GET_DATA);

  function handleOnInputChange(event) {
    const query = event.target.value;
    setSearchQuery(query);
  }

  const render = () => {
    if (loading) {
      return <h2>Gathering Data</h2>;
    }
    if (error) {
      return <h2>An Error Occurred !</h2>;
    }
    if (searchQuery.length >= 3) {
      return (
        <div className='search-list'>
          {data.allPersons
            .filter((character) => character.name.toLowerCase().includes(searchQuery.toLowerCase()))
            .map((character) => (
              <CharacterItem
                setCharacterId={setCharacterId}
                key={character.id}
                character={character}
              />
            ))}
        </div>
      );
    }
  };
  return (
    <div className='search-bar'>
      <label htmlFor='search-input'>
        <input
          className='search-input'
          type='text'
          value={searchQuery}
          name='query'
          id='search-input'
          placeholder='Search StarWars Characters...'
          onChange={handleOnInputChange}
          onClick={() => getData()}
        />
      </label>
      {render()}
    </div>
  );
};

export default Search;
