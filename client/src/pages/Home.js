import React from 'react';
import styled from 'styled-components';

import FilmBox from '../components/FilmBox';
import SearchBar from '../components/SearchBar';

const Logo = styled.img`
  margin: 20px;
`;

const Home = () => {
  return (
    <>
      <Logo
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/2880px-Star_wars2.svg.png'
        alt='starwars logo'
        width='150px'
      />
      <SearchBar />
      <FilmBox />
    </>
  );
};

export default Home;
