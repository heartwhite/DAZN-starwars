import React, { useState } from 'react';
import CharacterItem from './CharacterItem';
import { Item, Input } from 'semantic-ui-react';
import styled from 'styled-components';

import { gql, useLazyQuery } from '@apollo/client';

export const SearchInput = styled(Input)`
  margin-bottom: 35px;
`;
export const Icon = styled.i`
  background-color: rgb(255, 65, 90);
`;

const GET_DATA = gql`
  query getData {
    allPersons {
      name
      id
    }
  }
`;

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
          <Item.Group divided relaxed='very'>
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
    <>
      <SearchInput
        icon={<Icon className='search icon inverted' />}
        placeholder='Search actors...'
        loading={loading}
        size='huge'
        onChange={handleOnInputChange}
        onClick={() => getData()}
        fluid
        focus
        type='text'
      />
      {render()}
    </>
  );
};

export default SearchBar;
