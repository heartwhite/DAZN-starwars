import React, { useState } from 'react';
import CharacterItem from './CharacterItem';
import { Input, Item } from 'semantic-ui-react';

import { gql, useLazyQuery } from '@apollo/client';

const GET_DATA = gql`
  query getData {
    allPersons {
      name
      id
    }
  }
`;

const icon = <i class='search  inverted  icon'></i>;

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const [getData, { loading, data, error }] = useLazyQuery(GET_DATA);

  function handleOnInputChange(event) {
    const query = event.target.value;
    setSearchQuery(query);
  }

  const render = () => {
    if (error) {
      return <h2>An Error Occurred !</h2>;
    }
    if (searchQuery.length >= 3) {
      return (
        <>
          <Item.Group className='absolute' divided relaxed='very'>
            {data.allPersons
              .filter((character) =>
                character.name.toLowerCase().includes(searchQuery.toLowerCase()),
              )
              .map((character) => (
                <CharacterItem key={character.id} character={character} />
              ))}
          </Item.Group>
        </>
      );
    }
  };
  return (
    <div className='search-bar'>
      <Input
        icon={icon}
        placeholder='Search for movie actors...'
        loading={loading}
        size='huge'
        onChange={handleOnInputChange}
        onClick={() => getData()}
        fluid
        focus
        type='text'
      />
      {render()}
    </div>
  );
};

export default SearchBar;
